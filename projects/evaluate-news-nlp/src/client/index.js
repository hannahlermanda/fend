const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, '.env') });

import { checkForName } from './js/nameChecker';
import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

console.log(checkForName);

alert("I EXIST");
console.log("CHANGE!!");

// Add the sentiment analysis script here

const analyzeButton = document.getElementById('analyze-btn');

analyzeButton.addEventListener('click', async () => {
  try {
    const textInput = document.getElementById('text-input').value;
    console.log(process.env);
    const apiKey = process.env.API_KEY;

    console.log('API Key:', apiKey); // Log the API key to ensure it's being read correctly

    const formData = new FormData();
    formData.append('key', apiKey);
    formData.append('lang', 'auto'); // Set the language of the text to analyze
    formData.append('txt', textInput);

    const response = await fetch('https://api.meaningcloud.com/sentiment-2.1', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    console.log('Sentiment Analysis Result:', result);

    // Extract and display sentiment analysis data
    const scoreTag = result.score_tag;
    const agreement = result.agreement;
    const subjectivity = result.subjectivity;
    const confidence = result.confidence;
    const irony = result.irony;

    console.log('Extracted Sentiment Analysis Data:', {
      scoreTag,
      agreement,
      subjectivity,
      confidence,
      irony,
    });

    const sentimentResultElement = document.getElementById('results');
    sentimentResultElement.innerHTML = `
      <p>Score Tag: ${scoreTag}</p>
      <p>Agreement: ${agreement}</p>
      <p>Subjectivity: ${subjectivity}</p>
      <p>Confidence: ${confidence}</p>
      <p>Irony: ${irony}</p>
    `;

  } catch (error) {
    console.error('Error:', error);
  }
});
