const service = require('./question.service');

function read(req, res) {
    service.getAllQuest()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).send(err);
        })
};

function create(req, res) {
    service.ajoutQuest(req.body)
        .then(result => {
            res.status(201).json(res.id);
        })
        .catch(err => {
            res.status(500).send(err);
        })
};

function update(req, res) {
    service.editQuest(req.body, req.params.id)
        .then(result => {
            res.status(200).json(res);
        })
        .catch(err => {
            res.status(400).send(err);
        })
};

function remove(req, res) {
    service.verifQuest(req.params.id)
        .then(result => {
            service.deleteQuest(req.params.id)
                .then(result => {
                    res.status(204);
                })
                .catch(err => {
                    res.status(500).send(err);
                })
        })
        .catch(err => {
            res.status(404).send(err);
        })
};

module.exports = {read, create, update, remove};