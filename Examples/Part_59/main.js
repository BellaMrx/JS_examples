'use strict';
const numbers = [2, 4, 42, 26, 7, 2, 58, 68, 19];
console.log('Before the loop.');
for (let i = 0; i < numbers.length; i++) { // Iterate over ...
  const number = numbers[i]; // ... the number array.
  if (number % 2 === 1) { // If a number is odd ...
    console.log('Odd number found.'); // ... output message ...
    break; // ... and abort the loop.
  } // Otherwise ...
  console.log(number); // ... output the number.
}
console.log('After the loop.');
// output:
// Before the loop.
// 2
// 4
// 42
// 26
// Odd number found.
// After the loop.