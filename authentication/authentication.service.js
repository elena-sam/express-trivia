const connection = require('./../config/connection');

function insertUser(name, password) {
    const promise = new Promise((resolve, reject) => {
        connection.query('INSERT INTO users SET ?', [name, password], (err, results) => {
            if (err) {
                reject(err);
            } else { 
                resolve(results);
            }
        });
    });
    return promise;
}

function getUser(email, password) {
    const promise = new Promise((resolve, reject) => {
        connection.query('SELECT * FROM users WHERE name = ? AND password = ?', [email, password], (err, results) => {
            if (err) {
                reject(err);
            } else { 
                resolve(results);
            }
        });
    });
    return promise;
}

module.exports = {
    insertUser,
    getUser
}