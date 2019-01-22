const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const passport = require('passport');
const questionsRouter = require('./questions/index');
const categoriesRouter = require('./categories/index');
const authRouter = require('./authentification');

app.use(bodyParser.json());
app.use(passport.initialize());
app.use('/api/auth', authRouter);
app.use('/api/questions', questionsRouter);
app.use('/api/categories', categoriesRouter);
    
app.listen(3000, (err) => {
    if (err) {
        throw new Error('Phoque...');
    }

    console.log(`Server is listening on 3000`);
});