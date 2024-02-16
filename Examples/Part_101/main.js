'use strict';
console.log(checkAge(15));                  // true
console.log(checkAge("Morty Sample"));      // TypeError: Age must be a number
console.log(checkAge(-15));                 // Is not called
function checkAge(age) {
  if(isNaN(parseFloat(age))) {
    throw new TypeError('Age must be a number.');
  } else if (age < 0) {
    throw new RangeError('Age can not be negative.');
  }
  return true;                            // If an error occurs, this instruction is no longer executed
}