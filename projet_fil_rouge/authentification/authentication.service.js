const connection = require('../config/connection');

function ajoutUser(user) {

    const promise = new Promise((resolve, reject) => {

        connection.query('INSERT INTO users SET ?', user, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });

    return promise;
};

function checkUser(userName) {

    const promise = new Promise((resolve, reject) => {
        connection.query('SELECT * FROM users WHERE name = ?', userName, (err, results) => {
            if (err || results.length < 0) {
                reject(err);
            } else {
                resolve(results[0]);
            }
        });
    });

    return promise;
}

module.exports = { ajoutUser, checkUser };
