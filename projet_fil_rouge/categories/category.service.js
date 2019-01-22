const connection = require('../config/connection');

function getAllCat() {

    const promise = new Promise((resolve, reject) => {

        connection.query('SELECT * FROM categories', (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });

    });

    return promise;
};

function ajoutCat(data) { // A voir le return ID

    const promise = new Promise((resolve, reject) => {

        connection.query('INSERT INTO categories VALUES ?', data, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });

    return promise;
};

function editCat(data, idCat) {
    const promise = new Promise((resolve, reject) => {
        connection.query('UPDATE categories SET ? where id = ?', [data, idCat], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });

    return promise;
};

function deleteCat(idCat) {
    const promise = new Promise((resolve, reject) => {
        connection.query('DELETE FROM categories WHERE id = ?', idCat, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });

    return promise;
};

function verifCat(idCat){
    const promise = new Promise((resolve, reject) => {
        connection.query('SELECT * from categories WHERE id = ?', idCat, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });

    return promise;
}

module.exports = {getAllCat, ajoutCat, editCat, deleteCat, verifCat};