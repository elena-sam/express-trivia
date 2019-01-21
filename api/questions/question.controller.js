const service = require ('./question.service');

function read (req, res){

    service.getQuestions
    .then( 
        result =>{
            res.status(200).json(result);
        })
    .catch(err => {
        res.status(500).send(err);

    })
};

module.exports = {
    read,
}
