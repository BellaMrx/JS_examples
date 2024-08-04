function checkAge() {
    const element = document.getElementById('age');     // Age input field
    const age = element.value;                          // Current age value
    if(age < 0) {                                       // If value is negative ...
      showMessage('Age cannot be negative.');           // ... issue warning ...
    }
  }
  
function checkAgeIsNumber() {
    const element = document.getElementById('age');     // Input field age
    const age = element.value;                          // Current age value
    if(!(!isNaN(parseFloat(age)) && isFinite(age))) {   // If value is number ...
      showMessage('Age must be number.');               // ... output message.
    }
  }
  
function clearMessage() {
    showMessage('');
  }
  
function showMessage(message) {
    const output = document.getElementById('output');
    output.textContent = message;
  }
  
function init() {
    const element = document.getElementById('age');     // Get element
    element.addEventListener(                           // Register event listener
      'blur',                                           // Name of the event
      clearMessage                                      // Name of the event listener
    );
    element.addEventListener(                           // Register event listener
      'blur',                                           // Name of the event
      checkAge                                          // Name of the event listener
    );
    element.addEventListener(                           // Register event listener
      'blur',                                           // Name of the event
      checkAgeIsNumber                                  // Name of the event listener
    );
  }
    
document.addEventListener('DOMContentLoaded', init);