const router = require('express').Router();
const controller = require ('./question.controller');

router.get('/', controller.read);

module.exports = router;

