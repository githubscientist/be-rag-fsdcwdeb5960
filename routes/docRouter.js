const express = require('express');
const { seedDocs, askQuestion } = require('../controllers/docController');

const docRouter = express.Router();

// two routes for two pipelines of RAG
docRouter.post('/embed-docs', seedDocs);
docRouter.post('/ask', askQuestion);

module.exports = docRouter;