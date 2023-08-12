// Import the js file to test
import { handleSubmit } from "../src/client/js/formHandler"
// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the submit functionality", () => {
// The test() function has two arguments - a string description, and an actual test as a callback function.  
test("Testing the handleSubmit() function", () => {
      // Define the input for the function, if any, in the form of variables/array
      // Define the expected output, if any, in the form of variables/array
      // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
      // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
      expect(handleSubmit).toBeDefined();
})});

describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
      // Create a mock DOM element for form input
      const inputElement = document.createElement('input');
      inputElement.setAttribute('id', 'name');
      inputElement.value = "Test Input";
  
      // Create a mock DOM element for the results section
      const resultsElement = document.createElement('div');
      resultsElement.setAttribute('id', 'results');
  
      // Append the mock DOM elements to the document body
      document.body.appendChild(inputElement);
      document.body.appendChild(resultsElement);
  
      // Mock the fetch response
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve({ message: "Test message" })
        })
      );
  
      // Call the handleSubmit function
      handleSubmit(new Event('submit'));
  
      // Check if the results section contains the expected message
      expect(resultsElement.innerHTML).toEqual("Test message");
    });
  });