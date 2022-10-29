const router = require('express').Router();
const { route } = require('./htmlRoutes');
const htmlRoutes = require("./htmlRoutes");
const apiRoutes = require("./api")


// HTML ROUTES
    router.use(htmlRoutes)

// API ROUTES
    router.use(apiRoutes)



module.exports = router;