const localStrategy = require('passport-local').Strategy;
const passport = require('passport');
const connection = require('../config/connection');
const controller = require('../authentification/authentication.controller');
const service = require('./authentication.service');

passport.use('signup', new localStrategy({
    usernameField: 'name'
}, (username, password, done) => {
    if (username.length < 1 && password.length < 1) {
        return done(null, false);
    }
    const user = { name: username, password: password };
    service.ajoutUser(user)
        .then(() => {
            return done(null, user);
        })
        .catch(err => {
            return done(err);
        })
}));

passport.use('signin', new localStrategy({
    usernameField: 'name'
}, (username, password, done) => {
    if (username.length < 1 && password.length < 1) {
        return done(null, false);
    }

    service.checkUser(username)
        .then(user => {
            if (!user || user.password !== password) {
                return done(new Error('Invalid credentials'))
            } else {
                return done(null, user);
            }
        })
        .catch(err => {
            return done(err);
        })
}));
