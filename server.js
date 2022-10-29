const express = require('express');
const path = require('path');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;

const app = express();


// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes)

app.use(express.static('public'));



app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);