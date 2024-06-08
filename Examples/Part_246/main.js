'use strict';
function createAddFunction() {
  return function(x, y) {
    return x + y;
  }
}
const addFunction1 = createAddFunction();
const addFunction2 = createAddFunction();
console.log(addFunction1(22, 42));          // 64
console.log(addFunction2(27, 13));          // 40
