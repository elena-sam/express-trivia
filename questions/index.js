const router = require('express').Router();
const controller = require('./question.controlleur')

/**
 * Récupère toute les questions.
 */
router.get('/all', controller.readAll);

/**
 * Insere une question en base de donnée
 */
router.post('/insert', controller.insertOne);

/**
 * Modifie une question en base de donnée.
 */
router.put('/change/:id', controller.changeOne);

/**
 * Supprime une question en base de donnée
 */
router.delete('/delete/:id', controller.deleteOne);

module.exports = router;