const service = require('./category.service');

function read(req, res) {
    service.getAllCat()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).send(err);
        })
};

function create(req, res) {
    service.ajoutCat(req.body)
        .then(result => {
            res.status(201).json(res.id);
        })
        .catch(err => {
            res.status(500).send(err);
        })
};

function update(req, res) {
    service.editCat(req.body, req.params.id)
        .then(result => {
            res.status(200).json(res);
        })
        .catch(err => {
            res.status(400).send(err);
        })
};

function remove(req, res) {
    service.verifCat(req.params.id)
        .then(result => {
            service.deleteCat(req.params.id)
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