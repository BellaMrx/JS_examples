'use strict';
function sum(x, y) {
  const result =
    normalize(x) +
    normalize(y);
  function normalize(i) {
    if(i < 0) {
      return 0;
    }
    return i;
  }
  return result;
}
console.log(sum(-4, 4));    // output: 4
console.log(normalize(-4)); // ReferenceError: normalize is not defined