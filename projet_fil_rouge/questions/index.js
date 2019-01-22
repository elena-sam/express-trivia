const express = require('express');
const app = express();
const port = 3000;
const connection = require('../config/connection');
const bodyParser = require('body-parser');

const controller = require('./question.controller');

const router = require('express').Router();

router.post('/', controller.create);

router.get('/', controller.read);

router.delete('/:id', controller.remove);

router.put('/:id', controller.update);

module.exports = router;