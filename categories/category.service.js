const connection = require('./../config/connection');

function getAll() {
    const promise = new Promise((resolve, reject) => {
        connection.query('SELECT * FROM categories', (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        })
    });
    return promise;
}

function insertOne(data) {
    const promise = new Promise((resolve, reject) => {
        connection.query('INSERT INTO categories SET ?', data, (err, results) => {
            if (err) {
                reject(err);
            } else { 
                resolve(results);
            }
        });
    });
    return promise;
}

function changeOne(id, data) {
    const promise = new Promise((resolve, reject) => {
        connection.query('UPDATE categories SET ? WHERE id = ?', [data, id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
    return promise;
}

function deleteOne(id) {
    const promise = new Promise((resolve, reject) => {
        connection.query('DELETE FROM categories WHERE id = ?', id, (err, results) => {
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
    getAll,
    insertOne,
    changeOne,
    deleteOne
}