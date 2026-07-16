const app = require("./app");

app
    .listen(3001, 'localhost', () => {
        console.log(`Server is running on http://${'localhost'}:${3001}`);
    })
    .on('error', (err) => {
        console.error('Error starting server:', err);
    });

