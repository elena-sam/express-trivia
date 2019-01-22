const passport = require('passport');
const jwt = require('jsonwebtoken');

function createUser(req, res) {
    // Authentification utilisateur.
    res.status(201).json({
        message: 'Signup successful'
    });
}

function loginUser(req, res) {
    const body = {
        email: user.email
    };
    //Sign the JWT token and populate the payload with the user email and id
    const token = jwt.sign({
        user: body
    }, 'top_secret');
    //Send back the token to the user
    return res.status(200).json({
        token
    });
}

module.exports = {
    createUser,
    loginUser
}