---
title: Configurations avancées
---

## Configurations avancées

### SSL avec Let's Encrypt

Modifiez le fichier `docker-compose.yml` pour ajouter le support SSL :

```yaml
environment:
    GITLAB_OMNIBUS_CONFIG: |
        external_url 'https://gitlab.example.com'
        letsencrypt['enable'] = true
        letsencrypt['contact_emails'] = ['admin@example.com']
        letsencrypt['auto_renew'] = true
```

Cela configurera automatiquement Let’s Encrypt pour générer et renouveler les certificats SSL.

### CI/CD avec GitLab Runners

Installez un GitLab Runner sur une machine séparée ou sur le même serveur.

```bash

docker run -d --name gitlab-runner --restart always \
    -v /srv/gitlab-runner/config:/etc/gitlab-runner \
    -v /var/run/docker.sock:/var/run/docker.sock \
    gitlab/gitlab-runner:latest
```

Inscrivez le GitLab Runner à votre instance GitLab :

```bash
docker exec -it gitlab-runner gitlab-runner register
```

Suivez les instructions pour connecter votre runner à votre projet GitLab, spécifiant l'URL de GitLab et le token du runner depuis l'interface de GitLab.

### Sauvegardes et restauration automatiques avancées

#### Planification des sauvegardes automatiques

Exemple d’un script de sauvegarde automatisé pour un cron :

```bash
#!/bin/bash
docker exec gitlab gitlab-backup create STRATEGY=copy
docker cp gitlab:/var/opt/gitlab/backups /path/to/backup/folder
```

Pour planifier ce script avec cron pour une exécution quotidienne :

```cron
0 2 * * * /path/to/backup_script.sh
```

#### Restauration à partir d’une sauvegarde

1. Arrêtez GitLab pour éviter toute modification :

    ```bash
    docker stop gitlab
    ```

2. Copiez le fichier de sauvegarde dans le répertoire `/var/opt/gitlab/backups` du conteneur :

    ```bash
    docker cp /path/to/backup/<backup-file> gitlab:/var/opt/gitlab/backups
    ```

3. Restaurez la sauvegarde :

4. Restaurez la sauvegarde :

    ```bash
    docker exec gitlab gitlab-backup restore BACKUP=<backup-file>
    ```

5. Redémarrez GitLab :

    ```bash
    docker start gitlab
    ```

#### Répartition de la charge avec un reverse proxy HAproxy

Configuration HAProxy complète pour la haute disponibilité:

```haproxy
global
        log /dev/log local0
        log /dev/log local1 notice
        daemon
        maxconn 2000
        tune.ssl.default-dh-param 2048

defaults
        mode http
        log global
        option httplog
        option dontlognull
        timeout connect 5000
        timeout client 50000
        timeout server 50000

frontend gitlab_frontend
        bind *:80
        bind *:443 ssl crt /etc/ssl/private/gitlab.pem
        redirect scheme https code 301 if !{ ssl_fc }
        
        # Règles ACL pour différents services
        acl is_git path_beg /git
        acl is_registry path_beg /registry
        
        # Distribution du trafic
        use_backend gitlab_servers if is_git
        use_backend registry_servers if is_registry
        default_backend gitlab_servers

backend gitlab_servers
        balance roundrobin
        option httpchk HEAD / HTTP/1.1\r\nHost:\ gitlab.example.com
        server gitlab1 192.168.1.101:80 check inter 2000 rise 2 fall 3
        server gitlab2 192.168.1.102:80 check inter 2000 rise 2 fall 3
        http-request set-header X-Forwarded-Proto https if { ssl_fc }
        http-request set-header X-Forwarded-Proto http if !{ ssl_fc }

backend registry_servers
        balance roundrobin
        server registry1 192.168.1.103:5000 check
        server registry2 192.168.1.104:5000 check
```

### Base de données PostgreSQL en cluster

#### Installation de PostgreSQL sur les nœuds principaux et secondaires

```bash
sudo apt install postgresql-12 postgresql-12-repmgr
```

#### Configuration du nœud principal (`postgresql.conf`)

```conf
listen_addresses = '*'
wal_level = 'replica'
max_wal_senders = 10
max_replication_slots = 10
hot_standby = on
```

#### Configuration de la réplication sur le nœud secondaire

```bash
sudo -u postgres pg_basebackup -h primary_node -D /var/lib/postgresql/12/main -U replicator -v -P --wal-method=stream
```

#### Configuration de `repmgr.conf` sur chaque nœud

```conf
node_id=1
node_name=node1
conninfo='host=node1 user=repmgr dbname=repmgr'
data_directory='/var/lib/postgresql/12/main'
```

#### Mettre à jour la configuration GitLab

```ruby
postgresql['enable'] = false
gitlab_rails['db_adapter'] = 'postgresql'
gitlab_rails['db_host'] = 'postgresql.example.com'
gitlab_rails['db_port'] = 5432
gitlab_rails['db_database'] = 'gitlabhq_production'
gitlab_rails['db_username'] = 'gitlab'
gitlab_rails['db_password'] = 'your_password_here'
```

### Partage de fichiers avec un NFS

#### Installation du serveur NFS

```bash
sudo apt install nfs-kernel-server
```

#### Configuration du partage NFS (`/etc/exports`)

```exports
/srv/gitlab/data *(rw,sync,no_root_squash,no_subtree_check)
```

#### Configuration des clients NFS

1. Installation du client

```bash
sudo apt install nfs-common
```

1. Montage du partage

```bash
sudo mount nfs-server:/srv/gitlab/data /var/opt/gitlab/git-data
```

#### Configuration GitLab pour utiliser NFS

```ruby
git_data_dirs({
    "default" => {
        "path" => "/var/opt/gitlab/git-data",
        "gitaly_address" => "tcp://localhost:8075"
    }
})

gitaly['configuration'] = {
    storage: [
        {
            name: 'default',
            path: '/var/opt/gitlab/git-data'
        }
    ]
}
```

#### Configuration du montage automatique (`/etc/fstab`)

```fstab
nfs-server:/srv/gitlab/data /var/opt/gitlab/git-data nfs defaults,soft,rw 0 0
```
