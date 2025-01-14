---
title: Les tags
---
## Qu'est-ce qu'un tag dans Git ?
Un tag dans Git est une référence à un point spécifique dans l'historique d’un projet. Les tags sont souvent utilisés pour marquer des versions spécifiques d’un logiciel, comme des releases (par exemple, v1.0.0, v2.0.0, etc.). Ils permettent de marquer des étapes importantes dans le développement d’un projet et de revenir facilement à ces points spécifiques.

## Types de tags
Il existe deux types de tags dans Git :
1. Tags légers (Lightweight Tags) :
   - Simples et ne contiennent que le nom du tag.
   - Similaires à une branche qui ne change jamais.

2. Tags annotés (Annotated Tags) :
   - Stockés comme des objets complets dans la base de données Git.
   - Contiennent un message, le nom de l'auteur, la date, et peuvent être signés et vérifiés avec GPG.
   - Recommandés pour les versions importantes car ils contiennent plus d'informations.

## Créer un tag

### Tag léger
Pour créer un tag léger, utilise la commande suivante :
```shell
git tag <nom-du-tag>
```

**Par exemple :**
```shell
git tag v1.0.0
```

### Tag annoté
Pour créer un tag annoté, utilise la commande suivante :
```shell
git tag -a <nom-du-tag> -m "Message du tag"
```

**Par exemple :**
```shell
git tag -a v1.0.0 -m "Version 1.0.0"
```

### Associer un tag à un commit spécifique
Pour associer un tag à un commit spécifique, tu dois connaître le hash du commit. Tu peux le trouver en utilisant la commande `git log` :
```shell
git log
```

#### Exemples
##### Tags léger
Pour créer un tag léger associé à un commit spécifique :
```shell
git tag <nom-du-tag> <hash-du-commit>
```

**Par exemple :**
```shell
git tag v1.0.0 abc1234
```

##### Tag annoté
Pour créer un tag annoté associé à un commit spécifique :

```shell
git tag -a <nom-du-tag> -m "Message du tag" <hash-du-commit>
```

**Par exemple :**
```shell
git tag -a v1.0.0 -m "Version 1.0.0" abc1234
```

## Pousser un tag vers un dépôt distant
Par défaut, les tags ne sont pas poussés vers le dépôt distant lorsque tu utilises `git push`. Tu dois les pousser explicitement.

## Pousser un tag spécifique
Pour pousser un tag spécifique :

```shell
git push origin <nom-du-tag>
```

**Par exemple :**
```shell
git push origin v1.0.0
```

## Pousser tous les tags
Pour pousser tous les tags :

```shell
git push origin --tags
```

## Lister les tags
Pour lister tous les tags dans ton dépôt :
```shell
git ta
```

## Vérifier un tag
Pour vérifier les informations d'un tag, utilise la commande suivante :
```shell
git show <nom-du-tag>
```

**Par exemple :**
```shell
git show v1.0.
```
Cela affichera les informations sur le tag, y compris le message, l'auteur, et les modifications associées.

## Supprimer un tag
### Supprimer un tag localement
Pour supprimer un tag localement :
```shell
git tag -d <nom-du-tag>
```

**Par exemple :**
```shell
git tag -d v1.0.0
```

### Supprimer un tag distant
Pour supprimer un tag distant :
```shell
git push origin --delete <nom-du-tag>
```

**Par exemple :**
```shell
git push origin --delete v1.0.0
```

### Exemple complet
Supposons que tu veux associer un tag `v1.0.0` au commit avec le hash `abc1234` :

1. Trouve le hash du commit :
   ```shell
   git log
   ```

2. Crée un tag annoté :
   ```shell
   git tag -a v1.0.0 -m "Version 1.0.0" abc1234
   ```

3. Pousse le tag vers le dépôt distant :
   ```shell
   git push origin v1.0.0
   ```

4. Vérifie le tag :
   ```shell
   git show v1.0.0
   ```

## Utilité des tags
Les tags sont particulièrement utiles pour :
- **Marquer des versions spécifiques** : Par exemple, des releases de logiciel.
- **Revenir à des points spécifiques** : Tu peux facilement revenir à un tag pour vérifier ou corriger des bugs.
- **Documenter l'historique** : Les tags annotés contiennent des informations supplémentaires qui peuvent être utiles pour comprendre le contexte d'une version.
