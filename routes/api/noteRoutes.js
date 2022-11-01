const router = require('express').Router();
const { response } = require('express');
const { fstat } = require('fs');
const path = require('path');
// const db = require('./db/db.json');

// helpers stored in helpers directory
const { readFromFile, readAndAppend } = require('../../helpers/fsUtils');
const uuid = require('../../helpers/uuid');


// GET route for retrieving notes
router.get('/', async (req, res) => {
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

// POST route for submitting new note
router.post('/', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuid(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json('note added successfully'); 
    } else {
        res.error('error in adding tip');
    }
});


// POST route for displaying stored titles



module.exports = router;