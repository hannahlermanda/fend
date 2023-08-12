const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

// Your MeaningCloud API key
const API_KEY = process.env.API_KEY;

console.log(`Your API key is ${API_KEY}`);

// Example text for sentiment analysis
const text = 'This is a test sentence for sentiment analysis.';

// Set up the API request options
const requestOptions = {
  method: 'POST',
  body: new URLSearchParams({
    key: API_KEY,
    txt: text,
    lang: 'en' // Language code (e.g., 'en' for English)
  }),
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
};

// Make the API request
fetch('https://api.meaningcloud.com/sentiment-2.1', requestOptions)
  .then(response => response.json())
  .then(data => {
    console.log('Sentiment Analysis Result:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    })

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
