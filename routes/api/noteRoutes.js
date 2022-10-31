const noteRouter = require('express').Router();
const { fstat } = require('fs');
const path = require('path');
// const { v4: uuidv4 } = require('uuid');
// const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');


// GET route for retrieving notes
noteRouter.get('/api/notes', (req, res) => {
    res.status(200).json(`${req.method} request received to get notes`);

    console.info(`${req.method} request received to get notes`);
});

// POST route for new note
noteRouter.post('/api/notes', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to add a note`);
  
    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;
  
    // If all the required properties are present
    if (title && text) {
      // Variable for the object we will save
      const newNote = {
        title,
        text,
        // id: uuidv4(),
      };

// obtain existing reviews
fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        const parsedNotes = JSON.parse(data);
        parsedNotes.push(newNote);

        fs.writeFile('./db/db.json', JSON.stringify(parsedNotes, null, 4),
        (writeErr) => 
            writeErr
            ? console.error(writeErr)
            : console.info('successfully updated notes')
        )
    }
});

const response = {
    status: 'success',
    body: newNote,
};

console.log(response);
res.status(201).json(response);
    } else {
        res.status(500).json('error in posting notes');
    }
}); 

module.exports = noteRouter;