---
title: Fusion de branches (merge)
---
## Fusion d'une branche dans la branche actuelle
```shell
git merge nouvelle-branche
```
Cette commande fusionne les modifications de nouvelle-branche dans la branche actuelle.
![merge](/fyc-git/beginner/merge.png)

## Rebase d'une branche
```shell
git rebase nouvelle-branche
```
Cette commande rejoue les commits de la branche actuelle sur `nouvelle-branche`. Le rebase permet de créer un historique de commits plus linéaire.
![rebase](/fyc-git/beginner/rebase.png)

## Squash & Merge/Rebase
```shell
git merge --squash nouvelle-branche
git rebase --squash nouvelle-branche
```
Cette commande fusionne les modifications de `nouvelle-branche` dans la branche actuelle en un seul commit. Cela permet de conserver un historique de commits plus propre.

## Fast-forward merge
```shell
git merge --ff-only nouvelle-branche
```
Cette commande fusionne les modifications de `nouvelle-branche` dans la branche actuelle en utilisant un fast-forward merge. Cela signifie que si la branche actuelle est un ancêtre direct de **`nouvelle-branche`**, Git avancera simplement le pointeur de la branche actuelle vers `nouvelle-branche` sans créer de commit de fusion.

### Avantages
- **Historique propre** : Le fast-forward merge conserve un historique de commits linéaire et propre, sans commits de fusion supplémentaires.
- **Simplicité** : Il est plus simple à comprendre et à suivre, surtout pour les projets avec des branches de fonctionnalités courtes.
### Limitations
- **Non applicable dans tous les cas** : Le fast-forward merge n'est possible que si la branche cible n'a pas divergé de la branche source. Si des commits ont été ajoutés à la branche cible après la création de la branche source, un fast-forward merge ne sera pas possible.

![fast-forward merge](/fyc-git/beginner/ff-merge.png)
