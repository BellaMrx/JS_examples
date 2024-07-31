function checkAge() {
    const output = document.getElementById('output');           // Container for message
    const element = document.getElementById('age');             // Age input field
    const age = element.value;                                  // Current age value
    if(age < 0) {                                               // If value is negative ...
      output.textContent = 'Age cannot be negative.';           // ... output message ...
    } else {                                                    // ... otherwise ...
      output.textContent = '';                                  // ... delete message.
    }
  }

// Definition of a DOM event handler
  function init() {
    const element = document.getElementById('age');     // (1) Get element
    element.onblur =                                    // (2) Define event
    checkAge;                                           // (3) Define event handler
  }
  
  window.onload = init;