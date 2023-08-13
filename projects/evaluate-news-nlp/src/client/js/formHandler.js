import { checkForName } from "./nameChecker"

async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    checkForName(formText)

    console.log("::: Form Submitted :::")
    try {
        const response = await fetch('http://localhost:8080/test');
        const res = await response.json();
        document.getElementById('results').innerHTML = res.message;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export { handleSubmit }
