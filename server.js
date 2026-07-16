const app = require("./app");
const mongoose = require("mongoose");
const { MONGODB_URI, PORT, HOST } = require("./utils/config");

mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');

        app
            .listen(PORT, HOST, () => {
                console.log(`Server is running on http://${HOST}:${PORT}`);
            })
            .on('error', (err) => {
                console.error('Error starting server:', err);
            });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
