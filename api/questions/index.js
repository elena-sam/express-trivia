const router = require('express').Router();
const controller = require ('./question.controller');

router.get('/', controller.read);

router.post('/', controller.create);

router.put('/:id', controller.update);

router.delete ('/:id', controller.remove);

module.exports = router;

