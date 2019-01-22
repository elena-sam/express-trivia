const express = require('express');
const app = express();
const port = 3000;
const connection = require('../config/connection');
const bodyParser = require('body-parser');
const passport = require('passport');
const controller = require('./authentication.controller');
const jwt = require('jsonwebtoken');
const router = require('express').Router();
require('./passport.strategy');

router.post('/signin', passport.authenticate('signin', {session: false}), controller.signin);

router.post('/signup', passport.authenticate('signup', {session: false}), controller.signup);

module.exports = router;