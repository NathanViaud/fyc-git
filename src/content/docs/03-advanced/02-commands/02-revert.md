---
title: Revert
---
`git revert` crée un nouveau commit qui annule les changements d'un commit précédent. Il est plus sûr pour les branches partagées car il préserve l'historique.
## Syntaxe
```shell
git revert <commit-hash>
```
## Fonctionnement
1. Identifie les changements introduits par le commit spécifié
2. Crée un nouveau commit qui applique l'inverse de ces changements
3. Ajoute ce nouveau commit à l'historique actuel
