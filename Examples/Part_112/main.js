'use strict';
function example(x) {
  console.log(x);           // 420
  x = 6;
  console.log(x);           // 420
}
let y = 420;
console.log(y);             // 6
example(y);
console.log(y);             // 420