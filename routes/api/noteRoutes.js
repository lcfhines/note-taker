const noteRouter = require('express').Router();
const { response } = require('express');
const { fstat } = require('fs');
const path = require('path');
// const db = require('./db/db.json');
const { v4: uuidv4 } = require('uuid');
// const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');


// GET route for retrieving notes
noteRouter.get('/api/notes', (req, res) => {
    // fs.readFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
    const notesData = fs.readFileSync(path.join(__dirname, './db/db.json'), 'utf-8');
    const notesParsed = JSON.parse(notesData);
    res.json(notesParsed);
});

// POST route for submitting new note
noteRouter.post('/api/notes', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuidv4();
        };
    

    const noteString = JSON.stringify(newNote);

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err){
            console.error(err);
        } else {
            const parsedNotes = JSON.parse(data);
            parsedNotes.push(noteString);
            writeToFile('./db/db.json', parsedNotes);
        }
    });

    const response = {
        status: 'success',
        body: newNote,
    };
    res.json(response);
    } else {
        res.error('error in posting note');
    }
});

// POST route for displaying stored titles



module.exports = noteRouter;