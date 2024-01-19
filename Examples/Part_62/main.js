'use strict';
const numbers = [2, 4, 42, 26, 7, 2, 58, 68, 19];
console.log('Before the loop.');
let i = -1;                                 // initialize counter variable
while(i < numbers.length) {                 // Iterate over the number array.
  i++;                                      // Increase the counter variable.
  const number = numbers[i];                // Assign the respective number.
  if (number % 2 === 1) {                   // If a number is odd ...
    console.log('Odd number found.');       // ... output message ...
    continue;                               // ... and cancel the loop iteration abort.
  } // Otherwise ...
  console.log(number);                      // ... output the number.
}