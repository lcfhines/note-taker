const router = require("express").Router();
const todoRoutes = require("./todoRoutes");

app.use("/todos", todoRoutes)

module.exports = router;