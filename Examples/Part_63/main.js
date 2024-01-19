'use strict';
const numbers = [2, 4, 42, 26, 7, 2, 58, 68, 19];
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  for (let j = i + 1; j < numbers.length; j++) {
    const number2 = numbers[j];
    console.log(`Compare ${number} with ${number2}`);
    if (number === number2) {
      console.log('Same numbers found');
      continue;
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
// Compare 2 with 58
// Compare 2 with 68
// Compare 2 with 19
// Compare 4 with 42
// Compare 4 with 26
// Compare 4 with 7
// Compare 4 with 2
// Compare 4 with 58
// Compare 4 with 68
// Compare 4 with 19
// Compare 42 with 26
// Compare 42 with 7
// Compare 42 with 2
// Compare 42 with 58
// Compare 42 with 68
// Compare 42 with 19
// Compare 26 with 7
// Compare 26 with 2
// Compare 26 with 58
// Compare 26 with 68
// Compare 26 with 19
// Compare 7 with 2
// Compare 7 with 58
// Compare 7 with 68
// Compare 7 with 19
// Compare 2 with 58
// Compare 2 with 68
// Compare 2 with 19
// Compare 58 with 68
// Compare 58 with 19
// Compare 68 with 19