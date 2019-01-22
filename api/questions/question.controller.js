const service = require('./question.service');

// CREATE - Creates new questions

async function create(req, res) {

    try {
        const result = await service.insertQuestions(req.body)
        res.status(201).json(result);
    } catch (error) {
        res.status(400).send(error);
    }
};

// READ - Calls all questions

function read(req, res) {

    service.getQuestions()
        .then(
            result => {
                res.status(200).json(result);
            })
        .catch(err => {
            res.status(500).send(err);
        })
};


// UPDATE - Updates/ Modifies current questions

async function update(req, res) {

    try {
        const result = await service.updateQuestions(req.params.id, req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Removes - Deletes a question

async function remove(req, res) {
    const id = req.params.id;
    try {
        await service.removeQuestions(id);
        res.status(204).end();
    } catch (error) {
        res.status(400).send(error);
    }
};


module.exports = {
    create,
    read,
    update,
    remove
}