---
title: Cherry-pick
---
`git cherry-pick` est utilisée pour appliquer les changements d’un commit spécifique à la branche actuelle. Cette commande est particulièrement utile pour sélectionner des commits individuels d’une branche et les appliquer à une autre.

## Syntaxe de base
```shell
git cherry-pick <commit-hash>
```

## Fonctionnement
1. Identifie les changements introduits par le commit spécifié
2. Applique ces changements à la branche actuelle
3. Crée un nouveau commit avec ces changements

## Exemples d’utilisation
- Appliquer un seul commit : `git cherry-pick <commit-hash>`
- Appliquer plusieurs commits : `git cherry-pick <commit-1> <commit-2> <commit-3>`
- Appliquer une série de commits : `git cherry-pick <commit-1>^..<commit-2>`

## Options utiles
- `--edit` : Permet de modifier le message du commit avant de l’appliquer
- `--no-commit` : Applique les changements sans créer automatiquement un nouveau commit
- `--signoff` : Ajoute une ligne “Signed-off-by” au message du commit

## Gestion de conflits
Si un conflit survient lors du cherry-pick :
1. Git mettra en pause l’opération
2. Vous devrez résoudre les conflits manuellement
3. Utilisez `git add` pour marquer les fichiers comme résolus
4. Continuez avec `git cherry-pick --continue`

**Autres options en cas de conflit :**
- `git cherry-pick --abort` : Annule l’opération et revient à l’état initial
- `git cherry-pick --skip` : Ignore le commit en conflit et passe au suivant

## Cas d’utilisation courants
1. Backporting : Appliquer un correctif d’une version récente à une version plus ancienne
2. Sélection de fonctionnalités : Choisir des fonctionnalités spécifiques d’une branche de développement pour une release
3. Correction d’erreurs de merge : Récupérer des commits perdus d’un merge complexe

## Bonnes pratiques
- Vérifiez toujours le contenu du commit avant de cherry-pick
- Utilisez avec précaution sur des branches partagées
- Considérez l’utilisation de `git rebase` pour des opérations plus complexes
