document.addEventListener('DOMContentLoaded', () => {

    // Personal API Key for OpenWeatherMap API
    const apiKey = '7e7d3aabe6867589934b102970f644d3&units=imperial';

    // Global Variables 
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';

    // Create a new date instance dynamically with JS
    let d = new Date();
    let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

    // Function to make a GET request to OpenWeatherMap API
    const getWeatherData = async (zip) => {
        const url = `${baseURL}${zip}&appid=${apiKey}`;
        try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
        } catch (error) {
        console.error('Error:', error);
        throw error; 
        }
    };
    
    
    // Event listener for generate button
    document.getElementById('generate').addEventListener('click', () => {
        const zipCode = document.getElementById('zip').value;
        getWeatherData(zipCode)
        .then((data) => {
            const userResponse = document.getElementById('feelings').value;
            const postDataObject = {
            temperature: data.main.temp,
            date: newDate,
            userResponse: userResponse,
            };
    
            // Make a POST request to add data to the weather journal
            postData('/add', postDataObject)
            .then(() => {
                updateUI();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
    
    // Function to GET Web API Data 
    const getData = async (url) => {
        const response = await fetch(url);
        try {
        const data = await response.json();
        return data;
        } catch (error) {
        console.error('Error:', error);
        }
    };
    
    // Function to POST data 
    const postData = async (url = '', data = {}) => {
        const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        });
    
        console.log('Response:', response); // Log the response object
    
        try {
        const responseData = await response.json();
        return responseData; // Return the parsed JSON data
        } catch (error) {
        console.error('Error:', error);
        }
    };
    
    // Function to GET Project Data - Updates the UI dynamically 
    const updateUI = async () => {
        const request = await fetch('/all'); 
        try {
        const allData = await request.json();
        console.log(allData)
        // Get the temperature, date, and content from the DOM
        const temperatureElement = document.getElementById('temp');
        const dateElement = document.getElementById('date');
        const userInputElement = document.getElementById('content');
    
        // Update the DOM 
        temperatureElement.textContent = `Temperature: ${allData.temperature} °F`;
        dateElement.textContent = `Date: ${allData.date}`;
        userInputElement.textContent = `User Input: ${allData.userResponse}`;
        } catch (error) {
        console.error('Error:', error);
        }
    };
    
    //Test
    getWeatherData('194016') //San Francisco
    .then((data) => {
        console.log(data); // Check if data is logged to the console
    })
    .catch((error) => {
        console.error('Error:', error);
    });

});