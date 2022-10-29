const express = require('express');
// const router = require('express').Router();

const noteRouter = require("./noteRoutes");

const app = express();

app.use("/notes", noteRouter);

module.exports = app;