---
title: Stash
---
`git stash` est utilisée pour sauvegarder temporairement des modifications non commitées dans votre répertoire de travail, vous permettant de basculer entre les branches ou de travailler sur autre chose sans faire de commit incomplet.

## Fonctionnement de base
- `git stash push` : Crée un nouveau stash
- `git stash list` : Sauvegarde les modification
- `git stash apply` : Applique le dernier stash sans le supprimer de la pile.
- `git stash pop` : Applique le dernier stash et le supprime de la pile.

## Sous-commandes importantes
- `git stash push "message"` : Crée un stash avec un message descriptif.
- `git stash show` : Affiche les changements dans le dernier stash.
- `git stash drop` : Supprime le dernier stash de la pile.
- `git stash clear` : Supprime tous les stashs.
- `git stash branch <nom-branche>` : Crée une nouvelle branche à partir du stash.

## Options utiles
- `-keep-index` : Stash seulement les fichiers non stagés.
- `-include-untracked` : Inclut les fichiers non suivis dans le stash.
- `u` : Équivalent à `-include-untracked`.
- `a` ou `-all` : Inclut les fichiers ignorés en plus des non suivis.

## Exemples d’utilisation
- Sauvegarder des modifications en cours :
    ```shell
    git stash push "Travail en cours sur la fonctionnalité X"
    ```

- Appliquer un stash spécifique :
  ```shell
  git stash apply stash@{2}
  ```

- Voir les différences dans un stash :
  ```shell
  git stash show -p stash@{0}
  ```

## Bonnes pratiques
- Utilisez des messages descriptifs pour vos stashs.
- Nettoyez régulièrement vos stashs inutiles.
- Vérifiez toujours le contenu d'un stash avant de l'appliquer.
- Préférez créer une branche à partir d'un stash pour des changements importants.

## Points à noter
- Les stashs sont locaux et ne sont pas poussés vers le dépôt distant.
- Un stash peut être appliqué sur n'importe quelle branche, pas seulement celle d'où il a été créé.
- En cas de conflit lors de l'application d'un stash, Git vous demandera de résoudre manuellement les conflits.
