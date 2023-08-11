const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Setup empty JS object to act as an endpoint for all routes
let projectData = {};

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON body
app.use(bodyParser.urlencoded({ extended: false })); // Parse URL-encoded bodies

// Initialize the main project folder
app.use(express.static('website'));

// Spin up the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Initialize all route with a callback function
app.get('/all', (req, res) => {
  res.send(projectData);
});

app.post('/add', (req, res) => {
    const newData = req.body; // Data received from the client
    projectData = {
      ...projectData,
      ...newData,
    };
    res.status(201).json({ message: 'Data received successfully' }); // Send a JSON response
  });
