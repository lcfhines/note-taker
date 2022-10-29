const router = require('express').Router();

const noteRouter = require("./noteRoutes");


router.use("/notes", noteRouter);

module.exports = router;