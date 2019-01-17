# express-trivia
**Objectif** : refaire le backend de cette API : https://opentdb.com/
### Import de la base de donnée
Importer le script test/db/trivia.sql dans MySQL

![model sql](https://i.ibb.co/xG219Bf/model.png)

### Structure des répertoires

`./config` :
* `connection.js` initialise et exporte la connection à la base de donnée MySQL.
* `environement.js` récupère et exporte l'ensemble des variables d'environements (user/pwd/db... mysql, secret/iat... pour jwt, fichier de logs...)
* `logger.js` initilise et exporte un logger pour node.

`./questions`:
* `index.js` définis et exporte le `Router` des routes de la ressource `question`.
* `question.controller.js` définis et exporte les routes de la ressource `question`.
* `question.service.js` définis et exporte plusieurs fonctions pour la manipulation des données de la table `questions` en base.

`./categories`:
* `index.js` définis et exporte le `Router` des routes de la ressource `category`.
* `category.controller.js` définis et exporte les routes de la ressource `category`.
* `category.service.js` définis et exporte plusieurs fonctions pour la manipulation des données de la table `categories` en base.

`./authentication`:
* `index.js` définis et exporte le `Router` des routes de la ressource `authentication`.
* `authentication.service.js` définis et exporte plusieurs fonctions pour la manipulation des données de la table `users` en base.
* `passport.strategy.js` définis des middlewares et stragegies utilisés pour l'authentification. Il y aura deux local stratégies `signup` et `signin`, et une stratégie `jwt`.

### ATTENTION : LES SERVICES DOIVENT RETOURNER DES PROMISES ! VOUS UTILISEREZ DONC ASYNC/AWAIT OU THEN/CATCH POUR LE TRAITEMENT DU RESULTAT LORSQUE VOUS FEREZ APPEL AUX FONCTIONS RETOURANT DES PROMISES.

### Create Read Update Delete => questions
Une route GET `/api/questions` :
* retourne l'ensemble des questions à l'utilisateur.
* retourne le code 200 si succès.

Une route POST `/api/questions` :
* insère une question en base.
* retourne la questions inséré en base à l'utilisateur (avec l'id).
* retourne le code 201 si succès.
* retourne le code 400 si les données ne sont pas correcte pour l'enregistrement.
* retourne le code 500 en cas d'erreur du serveur.

Une route PUT `/api/questions/:id` :
* mise à jour d'une question en base
* retourne la questions modifié en base à l'utilisateur (avec l'id).
* retourne le code 200 si succès.
* retourne le code 400 si les données ne sont pas correcte pour l'enregistrement.
* retourne le code 404 si la question ayant l'id en paramètre n'existe pas en base.
* retourne le code 500 en cas d'erreur du serveur.

Une route DELETE `/api/questions/:id`:
* supprime une question en base
* retourne le code 204 si succès.
* retourne le code 400 si les données ne sont pas correcte pour l'enregistrement.
* retourne le code 404 si la question ayant l'id en paramètre n'existe pas en base.
* retourne le code 500 en cas d'erreur du serveur.


### Create Read Update Delete => categories
Une route GET `/api/categories` :
* retourne l'ensemble des categories à l'utilisateur.
* retourne le code 200 si succès.

Une route POST `/api/categories` :
* insère une categories en base.
* retourne la categories inséré en base à l'utilisateur (avec l'id).
* retourne le code 201 si succès.
* retourne le code 400 si les données ne sont pas correcte pour l'enregistrement.
* retourne le code 500 en cas d'erreur du serveur.

Une route PUT `/api/categories/:id` :
* mise à jour d'une question en base
* retourne la categories modifié en base à l'utilisateur (avec l'id).
* retourne le code 200 si succès.
* retourne le code 400 si les données ne sont pas correcte pour l'enregistrement.
* retourne le code 404 si la question ayant l'id en paramètre n'existe pas en base.
* retourne le code 500 en cas d'erreur du serveur.

Une route DELETE `/api/categories/:id`:
* supprime une question en base.
* retourne le code 204 si succès.
* retourne le code 400 si les données ne sont pas correcte pour l'enregistrement.
* retourne le code 404 si la question ayant l'id en paramètre n'existe pas en base.
* retourne le code 500 en cas d'erreur du serveur.

### Signin/Signup et sécurité => authentication
La sécurité sera mis en oeuvre via JWT.

Une route POST `/api/auth/signup` :
* créer un utilisateur en base.
* retourne le code 201 si l'utilisateur à été créer.
* retourne le code 400 si l'utilisateur existe déjà.
* retourne le code 500 en cas d'erreur du serveur.

Une route POST `/api/auth/signin` :
* récupère en base l'utilisateur et vérifie le mot de passe.
* génère et retourne un JWT si la vérification est OK.
* retourne le code 200 si si la vérification est OK.
* retourne le code 401 si l'utilisateur n'existe pas.
* retourne le code 401 si le mot de passe est incorrects.

Les routes suivantes doivent être sécurisé avec la stratégie JWT de passport :
* POST `/api/questions`
* DELETE `/api/questions/:id`
* PUT `/api/questions/:id`
* POST `/api/categories`
* DELETE `/api/categories/:id`
* PUT `/api/categories/:id`


### ATTENTION : AUCUNE REQUETE SQL NE DOIT ETRE ECRITE DANS LES SCRIPTS CONTENTANT LES ROUTES !!!! LES REQUETES SQL SONT DEFINIS ET EXPORTE DANS LES SCRIPTS *.service.js
### RESSOURCES : NodeJS 
* [Correction Checkpoint (découpe controller/service)](https://github.com/WildCodeSchool/promo-0918-checkpoint3-js/tree/tours-correction)
* [Environment variables](https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786)
* [Logging in NodeJS](https://www.digitalocean.com/community/tutorials/how-to-use-winston-to-log-node-js-applications)
* [Winston logger](https://github.com/winstonjs/winston#readme)
* [Winston logger tuto](https://thisdavej.com/using-winston-a-versatile-logging-library-for-node-js/) 
### RESSOURCES : PROMISE et ASYNC/AWAIT
* [Promises, async/await (A LIRE!)](https://javascript.info/async)
* [Projet d'exemple](https://github.com/maxdhn/node-trivia)
* [NodeJS Mysql](https://www.ghadeer.io/nodejs-mysql)
* [NodeJS Async/Await and Promise](https://medium.com/@tkssharma/writing-neat-asynchronous-node-js-code-with-promises-async-await-fa8d8b0bcd7c)
* [Another blog about async/await and promises](https://hackernoon.com/javascript-promises-and-why-async-await-wins-the-battle-4fc9d15d509f)
### RESSOURCES : Json Web Token
* [Projet d'exemple](https://github.com/maxdhn/jwt-express)
* [Configure : Strategies & Verify Callback](http://www.passportjs.org/docs/configure/)
* [Passport Local Strategy](https://github.com/jaredhanson/passport-local)
* [Passport Jwt Strategy](https://github.com/themikenicholson/passport-jwt)
* [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
