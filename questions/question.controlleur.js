const service = require('./question.service');

function readAll(req, res) {
    service.getAll()
        .then(result => {
            res.sendStatus(200);
        })
        .catch(err => {
            res.send(err);
        })
};

async function insertOne(req, res) {
    try {
        const result = await service.insertOne(req.body);
        res.status(200).json(result);
    } catch(err) {
        res.sendStatus(400);
    }
}

async function changeOne(req, res) {
    try {
        const result = await service.changeOne(req.params.id, req.body);
        res.status(200).json(result);
    } catch (err) {
        if (!req.pa$.id) {
            res.sendStatus(404);
        }
        res.sendStatus(400);
    }
}
async function deleteOne(req, res) {
    try {
        const result = await service.deleteOne(req.params.id);
        res.status(200)
    } catch (err) {
        if(!req.params.id) {
            res.sendStatus(404);
        }
        res.sendStatus(400);
    }
} 

module.exports = {
    readAll,
    insertOne,
    changeOne,
    deleteOne
}