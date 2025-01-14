---
title: Gestion des branches
---
Dans un projet git, il est souvent d’usage de définir un modèle de branchement. Une sorte de stratégie ou une convention qu’on utilise pour gérer les différentes branches dans un dépôt Git.

## Le git flow
Git Flow est un modèle de gestion de branches pour Git, conçu pour faciliter le développement collaboratif et la gestion des versions de logiciels. Il a été popularisé par Vincent Driessen dans un article de blog en 2010\. Voici les principales branches et les règles de base du Git Flow :
### Branches principales
1. main (ou master) :
   - Contient le code de production.
   - Toujours stable et prêt à être déployé.
   - Les tags de version sont créés à partir de cette branche.

2. develop :
   - Contient le code de développement.
   - Intègre les nouvelles fonctionnalités et les corrections de bugs.
   - Peut être instable car elle est en constante évolution.

### Branches de support
1. feature/ :
   - Utilisées pour développer de nouvelles fonctionnalités.
   - Créées à partir de `develop`.
   - Fusionnées (merged) dans `develop` une fois la fonctionnalité terminée.

2. release/ :
   - Utilisées pour préparer une nouvelle version de production.
   - Créées à partir de `develop`.
   - Permettent de stabiliser le code avant de le fusionner dans `main`.
   - Une fois la version stable, fusionnée dans `main` et `develop`.

3. hotfix/ :
   - Utilisées pour corriger des bugs critiques en production.
   - Créées à partir de `main`.
   - Une fois le bug corrigé, fusionnée dans `main` et `develop`.

### Exemple de flux de travail
1. Développement d'une nouvelle fonctionnalité :
   - Créer une branche `feature/nouvelle-fonctionnalite` à partir de `develop`.
   - Développer la fonctionnalité.
   - Fusionner la branche `feature/nouvelle-fonctionnalite` dans `develop`.

2. Préparation d'une nouvelle version :
   - Créer une branche `release/1.0.0` à partir de `develop`.
   - Stabiliser le code, corriger les bugs, préparer la documentation, etc.
   - Fusionner la branche `release/1.0.0` dans `main` et `develop`.

3. Correction d'un bug critique en production :
   - Créer une branche `hotfix/1.0.1` à partir de `main`.
   - Corriger le bug.
   - Fusionner la branche `hotfix/1.0.1` dans `main` et `develop`.

## Trunk Based Development
Le Trunk Based Development (TBD) est une autre stratégie de gestion de branches Git privilégie le développement sur une branche principale unique (le “trunk”, généralement `main` ou `master` ). Cette approche favorise l’intégration continue et les déploiements fréquents.

### Principes fondamentaux
1. Une branche principale unique :
   - Appelée `trunk` , `main` ou `master`
   - Source de vérité unique pour tout le code.
   - Toujours prête pour le déploiement.

2. Intégration fréquente:
   - Les développeurs poussent leur code plusieurs fois par jour
   - Les changements sont petits et incrémentaux.
   - Réduction des conflits de fusion grâce aux commit fréquents

### Branches de support

1. features/ :
   - Branches courtes.
   - Créées à partir du trunk.
   - Fusionnées rapidement dans le trunk.
   - Doivent être petites et facilement revues.

### Exemple de flux de travail
1. Développement d’une nouvelle fonctionnalité :
   - Créer une branche `feature/small-change` depuis le trunk.
   - Développer la fonctionnalité
   - Utiliser des features toggles pour le code incomplet.
   - Fusionner rapidement dans le trunk.

2. Gestion des fonctionnalités plus importantes :
   - Décomposer en plusieurs petits changements.
   - Utiliser des features toggles pour masquer les fonctionnalités incomplètes.
   - Intégrer progressivement au trunk.
   - Activer la fonctionnalité une fois complète.
