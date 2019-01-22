const connection = require('../config/connection');

function getAllQuest() {

    const promise = new Promise((resolve, reject) => {

        connection.query('SELECT * FROM questions', (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });

    });

    return promise;
};

function ajoutQuest(data) { // A voir le return ID

    const promise = new Promise((resolve, reject) => {

        connection.query('INSERT INTO questions VALUES ?', data, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });

    return promise;
};

function editQuest(data, idQuest) {
    const promise = new Promise((resolve, reject) => {
        connection.query('UPDATE questions SET ? where id = ?', [data, idQuest], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });

    return promise;
};

function deleteQuest(idQuest) {
    const promise = new Promise((resolve, reject) => {
        connection.query('DELETE FROM questions WHERE id = ?', idQuest, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });

    return promise;
};

function verifQuest(idQuest){
    const promise = new Promise((resolve, reject) => {
        connection.query('SELECT * from questions WHERE id = ?', idQuest, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });

    return promise;
}

module.exports = {getAllQuest, ajoutQuest, editQuest, deleteQuest, verifQuest};