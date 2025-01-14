---
title: Cas pratique
---
## Comment faire un commit ?
Voici les étapes de base pour créer un commit :
1. **Modifier des fichiers** : Apportez les modifications nécessaires à vos fichiers.

2. **Ajouter les modifications à l'index** : Utilisez la commande `git add` pour ajouter les fichiers modifiés à l'index (staging area). Par exemple :
    ```shell
    git add nom_du_fichier
    ```
   Ou pour ajouter tous les fichiers modifiés :
   ```shell
   git add .
   ```

3. **Créer le commit** : Utilisez la commande `git commit` pour enregistrer les modifications dans le dépôt. Vous devez également fournir un message de commit décrivant les modifications. Par exemple :
   ```shell
   git commit -m "Ajout de la fonctionnalité X"
   ```

## Exemple de Workflow de commit
1. **Modifier un fichier** : Vous modifiez un fichier appelé `index.html`.

2. **Ajouter le fichier à l'index** :
   ```shell
   git add index.html
   ```

3. **Créer le commit** :
   ```shell
   git commit -m "Ajout de la nouvelle section dans index.html"
   ```
   Faire un commit c’est bien, faire un bon commit c’est mieux \!

   - **Faire des commits fréquemment** : il est important de capturer le plus souvent possible votre travail.

   - **Un commit se suffit à lui même** : chaque commit doit correspondre à une étape logique de votre travail,

## Conseils pour les débutants
- **Messages de commit clairs** : Utilisez des messages de commit clairs et descriptifs pour faciliter la compréhension des modifications par vous-même et par les autres.
- **Commits fréquents** : Faites des commits fréquents pour capturer des étapes logiques de votre travail. Cela facilite le retour en arrière si nécessaire.
- **Utilisez l'index** : L'index (staging area) vous permet de choisir quelles modifications inclure dans un commit. Cela vous donne un contrôle précis sur ce que vous enregistrez.
