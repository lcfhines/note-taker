const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use(routes);



app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);