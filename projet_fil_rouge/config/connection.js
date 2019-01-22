const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost', // adresse du serveur
    user: 'root', // le nom d'utilisateur
    password: 'Meillot37', // le mot de passe
    database: 'trivia', // le nom de la base de données
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});
module.exports = connection;