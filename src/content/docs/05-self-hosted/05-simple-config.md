---
title: Configuration initiale de GitLab
---
## Configuration initiale de GitLab

### Créer de nouveaux projets

1. Cliquez sur "New Project" dans l'interface GitLab.
2. Vous pouvez choisir de créer un projet vide, cloner un dépôt existant, ou importer un projet depuis un autre système Git (comme GitHub ou Bitbucket).
3. Configurez les visibilités de vos projets : public, privé ou interne (accessibles uniquement aux membres authentifiés de votre instance GitLab).

### Gérer les groupes et les utilisateurs

#### Création de groupes

1. Dans la barre latérale, allez à "Groups" > "New Group".
2. Donnez un nom à votre groupe et définissez ses permissions d'accès.
3. Une fois le groupe créé, vous pouvez y ajouter des projets et des utilisateurs.

#### Ajout d'utilisateurs

1. En tant qu'administrateur, vous pouvez inviter d'autres utilisateurs à rejoindre GitLab ou créer des comptes pour eux.
2. Dans l'interface, allez à "Admin Area" > "Users" > "New User".
3. Remplissez les informations nécessaires (nom, email, etc.) et définissez le rôle et le niveau de permission de l'utilisateur (Développeur, Mainteneur, Propriétaire, etc.).
4. Les utilisateurs recevront un email d'invitation leur permettant de se connecter à GitLab.

### Gérer les rôles et les permissions

GitLab offre plusieurs niveaux de rôles pour les utilisateurs dans les projets et les groupes :

- **Guest** : Peut seulement voir les projets publics.
- **Reporter** : Peut lire les dépôts et voir les problèmes.
- **Developer** : Peut contribuer aux dépôts.
- **Maintainer** : Peut fusionner les demandes d'extraction et gérer les paramètres du projet.
- **Owner** : A un contrôle total sur le projet ou le groupe.

### Configurer les accès SSH

1. Chaque utilisateur doit ajouter sa clé SSH à son compte GitLab.
2. Pour cela, l'utilisateur doit générer une clé SSH sur sa machine locale (s'il n'en a pas déjà une) en exécutant la commande suivante :

    ```sh
    ssh-keygen -t rsa -b 4096 -C "email@domain.com"
    ```

3. Une fois la clé SSH générée, copiez la clé publique en utilisant la commande suivante :

    ```sh
    cat ~/.ssh/id_rsa.pub
    ```

4. L'utilisateur doit ensuite aller dans GitLab, accéder à son profil utilisateur > Settings > SSH Keys, et coller la clé publique.
5. Les utilisateurs peuvent désormais cloner des projets avec SSH en utilisant l'URL SSH du projet.
