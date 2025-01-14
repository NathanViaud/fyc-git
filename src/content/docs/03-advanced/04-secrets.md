---
title: Gestion des secrets et informations sensibles
---
1. **Ne jamais commiter de secrets :**
   - Mots de passe
   - Clés API
   - Tokens d’authentifications
   - Certificats privés
   - Variables d’environnement

2. **Solutions pour gérer les secrets :**
   - Utiliser des fichiers `.env` (à ajouter dans `.gitignore` )

3. **En cas de commit accidentel de secrets**
   - Changer immédiatement les secrets compromis
   - Utiliser de préférence [git filter-repo](https://github.com/newren/git-filter-repo/) comme recommandé par la [documentation git](https://git-scm.com/docs/git-filter-branch)
   - Forcer la mise à jour du dépôt avec `git push –force`
