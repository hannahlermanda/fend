const path = require('path')
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, '.env') });

const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const MeaningCloud = require('meaning-cloud')

const app = express()

app.use(express.static('dist'))
app.use(express.json())

console.log(__dirname)

// Your MeaningCloud API key
const API_KEY = process.env.API_KEY;

console.log(`Your API key is ${process.env.API_KEY}`);

// Initialize the meaning-cloud library
const meaning = MeaningCloud({
  key: API_KEY,
  secure: true // You can adjust this based on your needs
});

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../client/views/index.html'));
});


// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

//Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
      navigator.serviceWorker.register('/dist/custom-service-worker.js')
      .then(registration => {
          console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
          console.error('Service Worker registration failed:', error);
      });
  });
}

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
