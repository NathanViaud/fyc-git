---
title: Installation de GitLab auto-hébergé avec Docker
---

## Installation de GitLab auto-hébergé avec Docker

### Étape 1 : Installer Docker et Docker Compose

Installez Docker:

```bash
sudo apt update
sudo apt install docker.io docker-compose -y
```

Vérifiez que Docker fonctionne correctement :

```bash
docker --version
docker-compose --version
```

### Étape 2 : Créer un fichier `docker-compose.yml` pour GitLab

Créez un répertoire dédié pour GitLab et un fichier nommé `docker-compose.yml` :

```bash
mkdir gitlab
cd gitlab
nano docker-compose.yml
```

Contenu de `docker-compose.yml` :

```yaml
version: '3'
services:
    gitlab:
        image: 'gitlab/gitlab-ce:latest'
        container_name: gitlab
        restart: always
        hostname: 'gitlab.example.com'
        environment:
            GITLAB_OMNIBUS_CONFIG: |
                external_url 'http://gitlab.example.com'
        ports:
            - '80:80'
            - '443:443'
            - '22:22'
        volumes:
            - './config:/etc/gitlab'
            - './logs:/var/log/gitlab'
            - './data:/var/opt/gitlab'
```

### Étape 3 : Démarrer GitLab avec Docker Compose

```bash
docker-compose up -d
```

Cela va télécharger l'image Docker de GitLab et démarrer les services nécessaires.

### Étape 4 : Accéder à GitLab

Une fois l’installation terminée, vous pouvez accéder à GitLab via l’URL spécifiée dans le fichier `docker-compose.yml` (par exemple, `http://<adresse-ip-du-serveur>`). La première connexion vous demandera de définir un mot de passe pour le compte administrateur (root).
