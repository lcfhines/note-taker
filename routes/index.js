const router = require('express').Router();
const { route } = require('./htmlRoutes');
const htmlRoutes = require("./htmlRoutes");
const apiRoutes = require("./api")


// HTML ROUTES
    // GET - HOME PAGE
    router.use(htmlRoutes)

// API ROUTES
    // GET /api/todos - gets all the todos
    // GET /api/todos/:id - gets one todo
    // POST /api/todos - creates a to do
    // PUT /api/todos/:id - update a todo
    // DELETE /api/todos/:id = deletes a todo

    router.use(apiRoutes)



module.exports = router;