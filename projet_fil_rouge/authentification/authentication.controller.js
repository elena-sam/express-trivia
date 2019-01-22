const service = require('./authentication.service');
const jwt = require('jsonwebtoken');

function signin(req, res) {
    const user = req.user;

    const token = jwt.sign({
        sub: user.name,
        isOk: true
    }, 'my_secret');

    res.status(200).json({
        token
    });
}

function signup(req, res) {
    res.status(201).end();
};

module.exports = { signin, signup };