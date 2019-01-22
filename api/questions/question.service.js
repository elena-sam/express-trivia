const connection = require('../config/connection');

// To select all questions from database

function getQuestions() {

    return new Promise((resolve, reject) => {

        connection.query('SELECT * FROM questions', (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        })
    })
}

// To insert a new question into the question database

function insertQuestions(data) {

    const promise = new Promise((resolve, reject) => {

        connection.query('INSERT INTO questions SET ?', data, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });

    return promise;
}

// To modify a question in the question database

function updateQuestions(id, data) {

    const promise = new Promise((resolve, reject) => {

        connection.query('UPDATE questions SET ? WHERE id = ?', [data, id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });

    return promise;
}


// To delete a question in the question database

function removeQuestions(id) {

    const promise = new Promise((resolve, reject) => {

        connection.query('DELETE FROM questions WHERE id = ?', id, (err, results) => {
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
    getQuestions,
    insertQuestions,
    updateQuestions,
    removeQuestions
};