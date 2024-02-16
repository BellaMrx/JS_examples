'use strict';   
console.log(checkAge(15));                  // true
console.log(checkAge("Morty Sample"));      // Error: Age must be a number
function checkAge(age) {
  if(isNaN(parseFloat(age))) {
    throw new Error('Age must be a number.');
  } else if (age < 0) {
    throw new Error('Age can not be negative.');
  }
  return true;    // If an error occurs, this instruction is no longer executed.
}