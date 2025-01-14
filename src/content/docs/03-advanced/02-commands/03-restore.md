---
title: Restore
---
`git restore` est une commande moderne qui se concentre sur la restauration de fichiers dans l'arbre de travail et la staging area.
## Syntaxe
```shell
git restore [<options>] [--source=<tree>] [--] <pathspec>...
```
## Fonctionnement
1. Restaure des fichiers depuis différentes sources
2. Peut désindexer des fichiers (unstage)
3. Ne modifie pas l'historique ni HEAD
