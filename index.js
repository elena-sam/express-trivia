const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const questionRouter = require('./questions');
const categoriesRouter = require('./categories');
const authentificationRouter = require('./authentication');
const secureRoute = require('./authentication/route-secure');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api/questions', questionRouter);

app.use('/api/categories', categoriesRouter);


app.use( bodyParser.urlencoded({ 
    extended : false 
}));

// require('./authentication/passport.strategy');

app.use('/auth', authentificationRouter);

app.use('/profile', passport.authenticate('jwt', { session : false }), secureRoute);

app.listen(3000, (err) => {
    if (err) {
        throw new Error('Phoque...');
    }

    console.log(`Server is listening on 3000`);
});