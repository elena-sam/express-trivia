# express-trivia

### Import de la base de donnée
Importer le script test/trivia.sql dans MySQL

### Structure du répertoire

`./config` :
* `connection.js` initialise et exporte la connection à la base de donnée MySQL.
* `environement.js` récupère et exporte l'ensemble des variables d'environements (user/pwd/db... mysql, secret/iat... pour jwt, fichier de logs...)
* `logger.js` initilise et exporte un logger pour node.

`./questions`:
* `index.js` définis et exporte le `Router` des routes de la ressource `question`.
* `question.service.js` définis et exporte plusieurs fonctions pour la manipulation des données de la table `questions` en base.

`./authentication`:
* `index.js` définis et exporte le `Router` des routes de la ressource `authentication`.
* `authentication.service.js` définis et exporte plusieurs fonctions pour la manipulation des données de la table `users` en base.
* `passport.strategy.js` définis des middlewares et stragegies utilisés pour l'authentification. Il y aura deux local stratégies `signup` et `signin`, et une stratégie `jwt`.

### ATTENTION : LES SERVICES DOIVENT RETOURNER DES PROMISES ! VOUS UTILISEREZ DONC ASYNC/AWAIT OU THEN/CATCH POUR LE TRAITEMENT DU RESULTAT LORSQUE VOUS FEREZ APPEL AUX FONCTIONS RETOURANT DES PROMISES.

### Create Read Update Delete => questions
* une route GET `/api/questions` pour récupérer l'ensemble des questions, renvoyer le code 200 si succès.
* une route POST `/api/questions` pour la création de question et renvoyer la questions inséré en base à l'utilisateur (avec l'id), renvoyer le code 201 si succès, ou 400 si les données ne sont pas correcte pour l'enregistrement, 500 si il s'agit d'une erreur du serveur.
* une route PUT `/api/questions/:id` pour la mise a jour de question et renvoyer la questions inséré en base à l'utilisateur (avec l'id), renvoyer le code 201 si succès, ou 404 si la question ayant l'ID en paramètre n'existe pas, ou 400 si les données ne sont pas correcte pour l'enregistrement, 500 si il s'agit d'une erreur du serveur.
* une route GET `/api/questions/:id` pour récupérer une question correspondant à l'id en paramètre, renvoyer le code 200 si succès, ou 404 si la question ayant l'ID en paramètre n'existe pas, ou 400 si les données ne sont pas correcte pour la récupération, 500 si il s'agit d'une erreur du serveur.
* une route DELETE `/api/questions/:id` pour supprimer une question correspondant à l'id en paramètre, renvoyer le code 204 si succès, ou 404 si la question ayant l'ID en paramètre n'existe pas, ou 400 si les données ne sont pas correcte pour la récupération, 500 si il s'agit d'une erreur du serveur.
* un middleware global pour la gestion des erreurs.

### Signin/Signup et sécurité => authentication
La sécurité sera mis en oeuvre via JWT.

* une route POST `/api/auth/signup` pour créer un utilisateur en base, renvoyer 201 si l'utilisateur à été créer ou 400 si l'utilisateur existe déjà.
* une route POST `/api/auth/signin` pour logger un utilisateur et lui renvoyer 200 et son JWT ou 401 si l'authentification échoue.
* la route POST `/api/questions` doit être sécurisé avec la stratégie JWT.
* la route DELETE `/api/questions/:id` doit être sécurisé avec la stratégie JWT.
* la route PUT `/api/questions/:id` doit être sécurisé avec la stratégie JWT.


### ATTENTION : AUCUNE REQUETE SQL NE DOIT ËTRE ECRITE DANS LES SCRIPTS CONTENTANT LES ROUTES !!!! LES REQUËTES SQL SONT DEFINIS ET EXPORTE DANS LES SCRIPTS *.service.js
