'use strict';
const numbers = [ 7, 10, 18, 26, 42 ];
numbers.name = "Array of numbers";
// for-in-Loop
for (let i in numbers) {
  console.log(i);   // 0, 1, 2, 3, 4, name
}
// for-of-Loop
for (let i of numbers) {
  console.log(i);   // 7, 10, 18, 26, 42
}