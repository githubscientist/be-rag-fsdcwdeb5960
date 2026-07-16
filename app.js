const express = require('express');
const docRouter = require('./routes/docRouter');

const app = express();

// parse the request body
app.use(express.json());

app.use('/', docRouter);

module.exports = app;