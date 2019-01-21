const express = require('express');
const app = express();

const questionRoutes = require('./api/questions/index');


// const bodyParser = require('body-parser');
// const cors = require('cors');

// //Middleware
// app.use(cors())
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));




app.use('/questions', questionRoutes);







app.use('/', (request, response) => {
    response.send('Bienvenue sur Express');
});


module.exports = app;