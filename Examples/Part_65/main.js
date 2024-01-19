'use strict';
const numbers = [2, 4, 42, 26, 7, 2, 58, 68, 19];
outerLoop:
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    innerLoop:
      for (let j = i + 1; j < numbers.length; j++) {
        const number2 = numbers[j];
        console.log(`Compare ${number} with ${number2}`);
        if (number === number2) {
          console.log('Same numbers found');
          break outerLoop;
        }
      }
  }

// output: 
// Compare 2 with 4
// Compare 2 with 42
// Compare 2 with 26
// Compare 2 with 7
// Compare 2 with 2
// Same numbers found