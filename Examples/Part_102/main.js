'use strict';
try {
  console.log(checkAge(15));                // true
} catch(error) {
  console.log(error);                       // Is not called
}
try {
  console.log(checkAge("Morty Sample"));    // No output
} catch(error) {
  console.log(error);                       // TypeError: Age must be a number
}
try {
  console.log(checkAge(-15));               // No output
} catch(error) {
  console.log(error);                       // RangeError: Age can not be negative
}
function checkAge(age) {
  if(isNaN(parseFloat(age))) {
    throw new TypeError('Age must be a number.');
  } else if (age < 0) {
    throw new RangeError('Age can not be negative.');
  }
  return true;                            // If an error occurs, this instruction is no longer executed
}