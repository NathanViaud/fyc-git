---
title: Amend
---
La commande `git commit --amend` est utilisée dans Git pour modifier le dernier commit que vous avez effectué. Elle permet de corriger des erreurs dans le message de commit ou d'ajouter des fichiers oubliés sans créer un nouveau commit. Voici quelques points clés sur son utilisation :

1. **Modifier le message de commit** : Si vous avez fait un commit et que vous réalisez que le message de commit n'est pas correct, vous pouvez utiliser **`git commit --amend`** pour le modifier.
   ```shell
   git commit --amend
   ```
   Cela ouvrira votre éditeur de texte par défaut avec le message de commit actuel, vous permettant de le modifier.

2. **Ajouter des fichiers au dernier commit** : Si vous avez oublié d'ajouter des fichiers à votre dernier commit, vous pouvez les ajouter à l'index avec **`git add`** et ensuite utiliser **`git commit --amend`** pour inclure ces fichiers dans le dernier commit.
    ```shell
    git add <fichier_oublié>
    ```
    ```shell
    git commit --amend
    ```

3. **Attention avec les commits déjà poussés** : Si le commit que vous souhaitez modifier a déjà été poussé vers un dépôt distant, utiliser **`git commit --amend`** peut causer des problèmes. Modifier un commit déjà poussé changera son hash, ce qui peut entraîner des conflits pour les autres collaborateurs. Dans ce cas, il est généralement préférable de créer un nouveau commit correctif.

4. **Forcer la mise à jour du dépôt distant** : Si vous avez modifié un commit déjà poussé et que vous devez mettre à jour le dépôt distant, vous devrez forcer la mise à jour avec **`git push --force`** ou **`git push --force-with-lease`**.
   ```shell
   git push --force
   ```
   Utilisez cette commande avec précaution, car elle peut écraser les modifications des autres collaborateurs.
