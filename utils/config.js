require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;
const HOST = process.env.HOST;
const PORT = process.env.PORT;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

module.exports = {
    MONGODB_URI,
    HOST,
    PORT,
    OPENAI_API_KEY
}