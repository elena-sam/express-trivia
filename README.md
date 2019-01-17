# express-trivia
**Objectif** : refaire le backend de l'API : https://opentdb.com/
### Import de la base de donnée
Importer le script test/db/trivia.sql dans MySQL

![model sql](https://i.ibb.co/xG219Bf/model.png)

### Structure des répertoires

`./config` :
* `connection.js` initialise et exporte la connection à la base de donnée MySQL.
* `environement.js` récupère et exporte l'ensemble des variables d'environements (user/pwd/db... mysql, secret/iat... pour jwt, chemin des fichiers de logs...)
* `logger.js` initilise et exporte un logger pour node.

`./questions`:
* `index.js` définis et exporte le `Router` des routes de la ressource `question`.
* `question.controller.js` définis et exporte les routes (fonctions) de la ressource `question`.
* `question.service.js` définis et exporte plusieurs fonctions pour la manipulation des données de la table `questions` en base.

`./categories`:
* `index.js` définis et exporte le `Router` des routes de la ressource `category`.
* `category.controller.js` définis et exporte les routes (fonctions) de la ressource `category`.
* `category.service.js` définis et exporte plusieurs fonctions pour la manipulation des données de la table `categories` en base.

`./authentication`:
* `index.js` définis et exporte le `Router` des routes de la ressource `authentication`.
* `authentication.controller.js` définis et exporte les routes (fonctions) de la ressource `authentication`.
* `authentication.service.js` définis et exporte plusieurs fonctions pour la manipulation des données de la table `users` en base.
* `passport.strategy.js` définis des middlewares et stragegies utilisés pour l'authentification. Il y aura deux local stratégies `signup` et `signin`, et une stratégie `jwt`.

### ATTENTION : LES SERVICES DOIVENT RETOURNER DES PROMISES ! VOUS UTILISEREZ DONC ASYNC/AWAIT OU THEN/CATCH POUR LE TRAITEMENT DU RESULTAT LORSQUE VOUS FEREZ APPEL AUX FONCTIONS RETOURANT DES PROMISES.

### ATTENTION : AUCUNE REQUETE SQL NE DOIT ETRE ECRITE DANS LES SCRIPTS CONTENTANT LES ROUTES !!!! LES REQUETES SQL SONT DEFINIS ET EXPORTE DANS LES SCRIPTS *.service.js

## Logger

L'utilisation d'un logger permet d'éviter l'utilisation de `console.log` qui reste pauvre en fonctionnalité et l'ensemble des informations loggé ne sont accessibles qu'à travers le process.
Le logging permet de conserver une trace des erreurs/exceptions qui sont levées dans l'application et des différents événements anormaux ou normaux liés à l'exécution de l'application.
Le logging permet de gérer des messages émis par une application durant son exécution et de permettre leur exploitation immédiate ou a posteriori. Le loggin permet par exemple de résoudre une anomalie en retracant l'ensemble des événements qui l'ont déclenché.  

Il existe plusieurs niveau d'erreur, les principaux sont :
* error : utilisé pour loggé des erreur
* warn : log des informations relatifs a un comportement innatendu
* info : log les informations "générales" (démarrage de serveur, service, etc)
* debug : log des informations utile au debug d'une application.

Avec NodeJs on utilisera le logger [winston](https://github.com/winstonjs/winston), les logs seront écrit dans la console et dans deux fichiers :
* `error.log` contiendra toutes les erreurs loggé de l'application.
* `combined.log` contiendra tous les niveaux de logging (y compris error).

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

## Middleware d'erreurs

La gestion des erreurs devra se faire un middleware dédié à cette usage. Chaque erreur détécté dans un service ou une route sera déléguée au middleware d'erreur, les codes retour http d'erreur (>= 400) ne seront plus renvoyé les routes mais par ce middleware.

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
