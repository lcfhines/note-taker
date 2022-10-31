const noteRouter = require('express').Router();
const { response } = require('express');
const { fstat } = require('fs');
const path = require('path');
// const db = require('./db/db.json');
// const { v4: uuidv4 } = require('uuid');
const { readFromFile, readAndAppend } = require('../../helpers/fsUtils');


// GET route for retrieving notes
noteRouter.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST route for submitting new note
noteRouter.post('/api/notes', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json('note added successfully'); 
    } else {
        res.error('error in adding tip');
    }
});


// POST route for displaying stored titles



module.exports = noteRouter;