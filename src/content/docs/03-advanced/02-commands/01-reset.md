---
title: Reset
---
La commande `git reset` est utilisée pour annuler des changements ou déplacer la branche actuelle vers un commit spécifique. Elle a trois modes principaux :
1. `git reset --soft` :
    - Déplace uniquement le pointeur HEAD
    - Conserve les modifications dans la zone de staging
    - Utile pour regrouper plusieurs commits
2. ` git reset --mixed` :
    - Déplace le pointeur HEAD
    - Annule la zone de staging
    - Les modifications sont conservées dans le répertoire de travail
3. `git reset --hard` :
    - Déplace le pointer HEAD
    - Annule la zone de staging
    - Supprime toutes les modifications du répertoire de travail
    - À utiliser avec précaution car les changements sont perdus
