const express = require('express');
const bodyParser = require('body-parser');
// const session = require('express-session');
const connection = require('./config/connection');
const questionRouter = require('./questions');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api', questionRouter);

app.listen(3000, (err) => {
    if (err) {
        throw new Error('Phoque...');
    }

    console.log(`Server is listening on 3000`);
});