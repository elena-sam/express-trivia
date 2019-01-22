const router = require('express').Router();
const controller = require('./authentication.controller');
const passport = require('passport');
require('./passport.strategy');

/**
 * Route pour log un user.
 */
router.post('/signup', passport.authenticate('signup', { session : false }), controller.createUser);


/**
 * Connection de l'utilisateur.
 */
router.post('/login', passport.authenticate('login', { session : false }), controller.loginUser);


module.exports = router;