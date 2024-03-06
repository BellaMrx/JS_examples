'use strict';
function example(x) {
  console.log(x.value);         // 420
  x.value = 6;
  console.log(x.value);         // 420
}
let y = {
  value: 420
};
console.log(y.value);           // 6
example(y);
console.log(y.value);           // 6