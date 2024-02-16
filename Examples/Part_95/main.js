'use strict';
function divide(x, y) {
  return normalize(x) / normalize(y);
}
function normalize(x) {
  return x < 0 ? 1 : x;
}
console.log(divide(4, -1));     // output: 4
console.log(divide(4, -2));     // output: 4
console.log(divide(4, 0));      // output: Infinity