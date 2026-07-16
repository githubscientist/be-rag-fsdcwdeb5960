require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;
const HOST = process.env.HOST;
const PORT = process.env.PORT;

module.exports = {
    MONGODB_URI,
    HOST,
    PORT
}