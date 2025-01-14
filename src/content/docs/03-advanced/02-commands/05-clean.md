---
title: Clean
---
`git clean` est utilisée pour supprimer les fichiers non suivis du répertoire de travail. Cette commande permet de nettoyer les fichiers qui ne sont pas sous le contrôle de version Git (nouveau fichiers).

## Syntaxe
```shell
git clean [options] [--] [<path>...]
```

## Fonctionnement
1. Identifie les fichiers non suivis dans le répertoire de travail
2. Supprime ces fichiers selon les options spécifiées
3. Ne touche pas aux fichiers suivis ou ignorés par défaut

## Exemples d'utilisations
- Supprimer les fichiers et répertoires non suivis : `git clean -fd`

## Options utiles
- `n` ou `-dry-run` : Simulation montrant ce qui serait supprimé
- `f` ou `-force` : Force la suppression des fichiers
- `d` : Inclut les répertoires non suivis
- `x` : Supprime aussi les fichiers ignorés
- `X` : Supprime uniquement les fichiers ignorés
- `i` : Mode interactif permettant de choisir les fichiers à supprimer

## Bonnes pratiques
- Utilisez toujours `git clean -n` avant `git clean -f`
- Préférez le mode interactif `-i` pour plus de sécurité
- Vérifiez votre fichier `.gitignore` avant d’utiliser l’option `-x`
- Faites une sauvegarde si nécessaire avant un nettoyage majeur
