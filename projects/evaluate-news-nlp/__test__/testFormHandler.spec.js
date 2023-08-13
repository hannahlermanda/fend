import { handleSubmit } from "../src/client/js/formHandler";

describe("Testing the submit functionality", () => {
  test("handleSubmit() should be defined", () => {
    expect(handleSubmit).toBeDefined();
  });

  test("handleSubmit() should fetch and display the correct message", async () => {
    // DOM structure for the form
    document.body.innerHTML = `
      <section>
        <form id="form" onsubmit="return handleSubmit(event)">
          <input id="name" type="text" name="input" value="Picard">
          <input type="text" id="otherInput" name="otherInput" value="" placeholder="Other Input">
          <input type="submit" name="" value="submit" onclick="return handleSubmit(event)" onsubmit="return handleSubmit(event)">
        </form>
      </section>
      <section>
        <strong>Form Results:</strong>
        <div id="results"></div>
        <br>
        <button id="analyze-btn">Analyze Sentiment</button>
        <pre id="sentiment-result"></pre>
      </section>
    `;

    // Mock the fetch response
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ message: "Test message" })
      })
    );

    // Call the handleSubmit function
    await handleSubmit(new Event("submit"));

    // Define resultsElement after it has been added to the DOM
    const resultsElement = document.getElementById("results");

    // Check if the results section contains the expected message
    expect(resultsElement.innerHTML).toBe("Test message");
  });
});
