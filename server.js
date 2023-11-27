const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

// Middleware to parse request body as JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// POST endpoint for /submit
app.post('/submit', (req, res) => {
    const userInput = req.body.userInput;
    console.log('Received user input:', userInput);

    // Process the user input and send a response
    res.send('Data received successfully!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
