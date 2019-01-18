const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    connection.query('SELECT * FROM questions', (err, results) => {
        if(err) {
            res.status(500).send('Erreur récupération questions');
        }
        else {
            res.status(200).json(results);
        }
    });
});

router.post('/', (req,res) => {
    connection.query('INSERT questions SET ? WHERE id=?', (err, results) => {
        if(err) {
            res.status(500).send('Erreur insertion questions');
        }
        else {
            res.status(201).json(results);
        }
    })
})