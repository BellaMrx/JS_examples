function checkAge() {
    const element = document.getElementById('age');         // Age input field
    const age = element.value;                              // Current value Age
    if(age < 0) {                                           // If value is negative ...
      showMessage('Age cannot be negative.');               // ... issue warning ...
    }
  }
  
  function checkAgeIsNumber() {
    const element = document.getElementById('age');         // Age input field
    const age = element.value;                              // Current value Age
    if(!(!isNaN(parseFloat(age)) && isFinite(age))) {       // If value is number ...
      showMessage('Age must be a number.');                 // ... issue a message.
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
    const element = document.getElementById('age');         // Get element
    element.addEventListener(                               // Register event listener
      'blur',                                               // Name of the event
      clearMessage                                          // Name of the event listener
    );
    element.addEventListener(                               // Register event listener
      'blur',                                               // Name of the event
      checkAge                                              // Name of the event listener
    );
    element.addEventListener(                               // Register event listener
      'blur',                                               // Name of the event
      checkAgeIsNumber                                      // Name of the event listener
    );
    const checkBox = document.getElementById('validation');
    checkBox.addEventListener('change', function() {
      if(checkBox.checked) {
        element.addEventListener('blur', checkAge);
        element.addEventListener('blur', checkAgeIsNumber);
      } else {
        clearMessage();
        element.removeEventListener('blur', checkAge);
        element.removeEventListener('blur', checkAgeIsNumber);
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', init);