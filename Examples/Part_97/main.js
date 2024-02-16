'use strict';
console.log(checkAge(19));      // true
console.log(checkAge(-19));     // Error: Age can not be negative
function checkAge(age) {
  if (age < 0) {
    throw new Error('Age can not be negative.');
  } else {
    return true;
  }
}