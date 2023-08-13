// Import the function to test
import { checkForName } from "../src/client/js/nameChecker";

describe("Testing the nameChecker functionality", () => {
  test("checkForName() should be defined", () => {
    expect(checkForName).toBeDefined();
  });

  test("checkForName() should correctly identify a valid name", () => {
    const validName = "Picard";
    const isValidName = checkForName(validName);
    expect(isValidName).toBeTruthy();
  });

  test("checkForName() should correctly identify an invalid name", () => {
    const invalidName = "Invalid";
    const isValidName = checkForName(invalidName);
    expect(isValidName).toBeFalsy();
  });
});
