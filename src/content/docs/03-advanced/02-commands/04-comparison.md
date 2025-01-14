---
title: Comparaison des commandes revert/reset/restore
---
| Aspect | git reset | git revert | git restore |
| :---- | :---- | :---- | :---- |
| Historique | Modifie | Préserve | Ne touche pas |
| Nouveaux commits | Non | Oui | Non |
| Portée | Commits/fichiers | Commits | Fichiers |
| Utilisation principale | Branches locales | Branches partagées | Fichiers de travail |
| Niveau de risque | Elevé | Faible | Moyen |
| Réversibiliité | Difficile | Facile | Variable |
| Cas d’usage typique | Nettoyer l’historique | Annuler commits publiés | Restaurer fichiers |

## Exemples d'utilisations courants
| Action souhaitée | Commande recommandée |
| :---- | :---- |
| Annuler le dernier commit (local) | `git reset HEAD~1`  |
| Annuler un commit publié | `git revert <commit-hash>` |
| Désindexer des modifications | `git restore --staged <file>` |
| Annuler les modifications d’un fichier | `git restore --source=<commit> <file>` |

## Bonnes Pratiques revert/reset/restore
1. Pour les branches partagées :

   * Utilisez `git revert` pour annuler des commits

   * Évitez `git reset` qui modifie l'historique

2. Pour le travail local :

   * `git reset` pour nettoyer l'historique

   * `git restore` pour gérer les fichiers individuels

3. Précautions :

   * Faites des sauvegardes avant d'utiliser `git reset --hard`

   * Vérifiez toujours avec `git status` avant d'utiliser `git restore`

   * Testez `git restore` avec `-staged` avant de perdre des modifications

4. Ordre de préférence pour annuler des changements :

   * Modifications non stagées : `git restore`

   * Modifications stagées : `git restore --staged`

   * Commits locaux : `git reset`

   * Commits publiés : `git revert`
