---
title: Le pointeur HEAD
---
HEAD est une référence spéciale dans Git qui pointe vers le commit actuel dans votre branche de travail. En d’autres termes, HEAD représente le dernier commit de la branche sur laquelle vous vous trouvez actuellement.

**Caractéristiques importantes du pointeur HEAD :**
1. Il agit comme un curseur, indiquant où vous vous trouvez dans l’historique de votre projet.
2. Normalement, HEAD pointe vers le dernier commit d’une branche (on dit alors qu’il est “attaché” à cette branche).
3. Quand vous faites un nouveau commit, HEAD se déplace automatiquement pour pointer vers ce nouveau commit.
4. Dans certains cas, HEAD peut être “détaché”, c’est à dire qu’il pointe directement sur un commit spécifique que sur une branche.
