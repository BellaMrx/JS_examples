function checkAge() {
    const output = document.getElementById('output');           // Container for message
    const element = document.getElementById('age');             // Age input field
    const age = element.value;                                  // Current value age
    if(age < 0) {                                               // If value is negative ...
      output.textContent = 'Age cannot be negative.';           // ... output message ...
    } else {                                                    // ... otherwise ...
      output.textContent = '';                                  // ... delete message.
    }
  }
  
  function init() {
    const element = document.getElementById('age');             // Get element
    element.addEventListener(                                   // Register event listener
      'blur',                                                   // Name of the event
      checkAge,                                                 // Name of the event listener
      false                                                     // Event flow
    );
  }
  
  document.addEventListener('DOMContentLoaded', init);