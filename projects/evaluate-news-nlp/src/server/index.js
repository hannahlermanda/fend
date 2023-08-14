const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const MeaningCloud = require('meaning-cloud');

const app = express();

app.use(express.static('dist'));
app.use(express.json());

// Your MeaningCloud API key
const API_KEY = process.env.API_KEY;

// Initialize the meaning-cloud library
const meaning = MeaningCloud({
  key: API_KEY,
  secure: true 
});

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../client/views/index.html'));
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

app.get('/test', function (req, res) {
  res.send(mockAPIResponse);
});

app.post('/analyze', async function (req, res) {
  console.log('Analyzing sentiment...');
  const url = req.body.url; // Get URL from request body

  try {
    const response = await meaning.sentiment({
      url: url,
      lang: 'en'
    });
    console.log('Sentiment Analysis Result:', response);
    res.json(response);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});
