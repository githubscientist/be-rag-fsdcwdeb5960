const express = require('express');
const docRouter = require('./routes/docRouter');

const app = express();

app.use('/', docRouter);

module.exports = app;