const Doc = require("../models/doc");
const OpenAI = require('openai');
const { OPENAI_API_KEY } = require('../utils/config');

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY
});

const getEmbedding = async (text) => {
    // we use the OpenAI API to get the embedding for the given text
    const response = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: text
    });

    // we return the embedding vector from the response
    return response.data[0].embedding;
}

const seedDocuments = async (documents) => {
    // let's create an empty array to hold the documents we want to insert
    const docsToInsert = [];

    // iterate through the documents array
    // example: text: "Sailfish is the fastest animal in the water"
    // embedding = [0.123, 0.456, 0.789, ...]
    for (const text of documents) {
        // for every text within the documents array, we get the vector embedding
        const embedding = await getEmbedding(text);

        // with the embedding, we push an object containing the text and its embedding into the docsToInsert array
        docsToInsert.push({ text, embedding });
    }

    // now we can insert the documents into the database
    const insertResult = await Doc.insertMany(docsToInsert);
    return insertResult;
}

const docController = {
    seedDocs: async (req, res) => {
        try {
            const { documents } = req.body;

            const insertResult = await seedDocuments(documents);

            res.status(200).json({ message: "Docs seeded successfully", data: insertResult });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    },
    askQuestion: async (req, res) => {
        try {
            // get the query from the request body

            // get the embeddings for the query

            // perform a similarity search using dot product to find the most relevant documents

            // sort the documents by similarity score and select the top N documents

            // construct a prompt for the OpenAI API using the top N documents and the query

            // send the prompt to the OpenAI API and get the response

            // return the response to the client
            res.status(200).json({ answer: "This is a sample answer to your question." });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}

module.exports = docController;