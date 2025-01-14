---
title: Zone de staging
---
## Rôle de la zone de Staging
1. **Préparation des Changements** : La zone de staging permet de préparer les modifications que vous souhaitez inclure dans le prochain commit. Vous pouvez y ajouter des fichiers ou des parties de fichiers que vous avez modifiés, créés ou supprimés.
2. **Contrôle Granulaire** : Elle offre un contrôle granulaire sur ce qui sera inclus dans le prochain commit. Vous pouvez ajouter des fichiers spécifiques ou même des parties spécifiques de fichiers (grâce à l'option **`p`** de **`git add`**), ce qui permet de créer des commits plus précis et organisés.
3. **Séparation des Étapes** : La zone de staging sépare les étapes de modification des fichiers et de création des commits. Cela permet de vérifier et de valider les changements avant de les enregistrer définitivement dans le dépôt.

Workspace (mon travail actuel) → Staging → Local repository (Travail sauvegardé)

## Fonctionnement de la Zone de Staging
1. **Modifier des Fichiers** : Vous commencez par modifier des fichiers dans votre espace de travail.
2. **Ajouter à la Zone de Staging** : Utilisez la commande `git add` pour ajouter les fichiers modifiés à la zone de staging.
3. **Vérifier le Contenu de la Zone de Staging** : Utilisez la commande `git status` pour voir quels fichiers sont actuellement dans la zone de staging et quels fichiers ont été modifiés mais ne sont pas encore dans la zone de staging.
