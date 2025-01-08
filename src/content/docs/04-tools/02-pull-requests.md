---
title: Pull Requests
---
Les pull requests (PR) sont un mécanisme permettant de proposer des modifications à intégrer dans une branche, généralement la branche principale du projet.

## Exemple workflow Git (GitFlow) :
- `main` : branche de production
- `develop` : branche de développement
- `feature/*` : nouvelles fonctionnalités
- `release/*` : préparation des releases
- `hotfix/*` : corrections urgentes

## Processus typique d'une pull request :
1. Création d'une branche de fonctionnalité
2. Développement et commits sur cette branche
3. Ouverture d'une pull request
4. Revue de code par les pairs
5. Discussions et modifications si nécessaire
6. Merge de la pull request

## Bonnes pratiques pour les pull requests :
- Garder les PR de taille raisonnable pour faciliter la revue
- Utiliser des templates de PR pour standardiser les informations fournies
- Lier les PR aux issues correspondantes
- Utiliser des checks automatisés (CI, linting, tests) avant le merge
## Exemple de template de pull request :
```md
## Description
[Description concise des changements apportés]

## Problème résolu
[Lien vers l'issue concernée ou description du problème]

## Changements proposés
- [Changement 1]
- [Changement 2]
- [Changement 3]

## Checklist
- [ ] J'ai testé ces changements localement
- [ ] J'ai mis à jour la documentation si nécessaire
- [ ] Les tests automatisés passent avec succès

## Screenshots (si applicable)
[Insérer des captures d'écran ici]
```
