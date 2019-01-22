const controller = require('./category.controller');

const router = require('express').Router();

router.post('/', controller.create);

router.get('/', controller.read);

router.delete('/:id', controller.remove);

router.put('/:id', controller.update);

module.exports = router;