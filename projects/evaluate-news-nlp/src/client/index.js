import { checkForName } from './js/nameChecker';
import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';
import { registerRoute } from 'workbox-routing';
import { precacheAndRoute } from 'workbox-precaching';

console.log(checkForName);

console.log("CHANGE!!");

// Function to perform sentiment analysis API call
const analyzeButton = document.getElementById('analyze-btn');
const resultsContainer = document.getElementById('results');
const scoreTagElement = document.getElementById('score-tag');
const confidenceElement = document.getElementById('confidence');
const ironyElement = document.getElementById('irony');
const subjectivityElement = document.getElementById('subjectivity');
const agreementElement = document.getElementById('agreement');
const textElement = document.getElementById('text');
const polarityElement = document.getElementById('polarity');
const textInput = document.getElementById('text-input');

analyzeButton.addEventListener('click', () => {
  // The URL for sentiment analysis
  const baseURL = "https://api.meaningcloud.com/sentiment-2.1";
  const apiKey = "7decb6b4c6e8d1f7ac199598f21b946c"; // Replace with your actual API key

  const formData = new URLSearchParams();
  formData.append("key", apiKey);
  formData.append("lang", "auto");
  formData.append("url", textInput.value); // Use the input value

  // Get the form input value
  let formText = document.getElementById('text-input').value

 // Validate the form input
  if (!formText) {
    // Display an alert
    alert("Text input cannot be blank");
    return;
  }

  // Perform the API request
  fetch(baseURL, {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      // Handle the sentiment analysis data here
      console.log('Sentiment Analysis Result:', data);

      // Update the DOM with the sentiment analysis results
      scoreTagElement.textContent = `Score Tag: ${data.score_tag}`;
      confidenceElement.textContent = `Confidence: ${data.confidence}`;
      ironyElement.textContent = `Irony: ${data.irony}`;
      subjectivityElement.textContent = `Subjectivity: ${data.subjectivity}`;
      agreementElement.textContent = `Agreement: ${data.agreement}`;

      const forPolarityElement = data.score_tag === 'P' ? 'Positive' : 'Negative';
      polarityElement.textContent = `Polarity: ${forPolarityElement}`;

      // Extract and display the text snippet
      if (data.sentence_list && data.sentence_list.length > 0) {
        const textSnippet = data.sentence_list[0].text;
        textElement.textContent = `Text Snippet: ${textSnippet}`;
      } else {
        textElement.textContent = 'Text snippet not available';
      }

      // Show the results container
      resultsContainer.style.display = 'block';
    })
    .catch(error => {
      console.error('Error:', error);
    });
});