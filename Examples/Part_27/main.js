'use strict';
const name = 'Rick Sample';
const emptyString = '';
console.log(!name);         // output: false
console.log(!emptyString);  // output: true
const amount = 0;
const age = 25;
console.log(!amount);       // output: true
console.log(!age);          // output: false
console.log(!null);         // output: true
console.log(!NaN);          // output: true
console.log(!undefined);    // output: true
