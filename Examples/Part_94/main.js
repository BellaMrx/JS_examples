'use strict';
function divide(x, y) {
  return normalized(x) / normalized(y);
}
function normalize(x) {
  return x <= 0 ? 2 : x;
}
console.log(normalize(-2));     // output: 2
console.log(normalize(4));      // output: 4
console.log(divide(-2, 4));     /*  ReferenceError: normalized is not defined 
                                --> if normalize instead of normalized then output: 0.5 */