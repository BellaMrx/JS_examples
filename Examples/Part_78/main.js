'use strict';
function sum(numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  console.log(result);
}
sum([2,4,6,8]);                 // output: 20
sum([2,3,4,5,6,7,8,9]);         // output: 44
sum([1,2,3,4,5,6,7,8,9,10]);    // output: 55