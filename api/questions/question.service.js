const connection = require('../config/connection');

function getQuestions() {

    return new Promise ((resolve, reject) => {

      connection.query ('SELECT * FROM questions', (err, results) =>{
          if (err) {
              reject (err);
          } else {
              resolve (results);
          }
      })  

    })

};

module.exports.getQuestions = getQuestions();
