const noteRouter = require('express').Router();
const path = require('path');
// const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');


// GET route for retrieving notes
noteRouter.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
});

// POST route for new note



module.exports = noteRouter;