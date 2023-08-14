//Check name

function checkForName(inputText) {
    const names = ["Picard", "Riker", "Data", "Geordi", "Worf"];
    
    if (names.includes(inputText)) {
      return true;
    } else {
      return false;
    }
    
  }
  
  export { checkForName };
