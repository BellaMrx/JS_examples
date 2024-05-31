'use strict';
const regExp = /^\+?\d{2}\s\d{2}\s\d{5,7}$/;
console.log(regExp.test('+49 30 1234567'));         // true

console.log(regExp.test('49 30 1234567'));          // true
console.log(regExp.test('61 45 1234567'));          // true
console.log(regExp.test('49 30 12345'));            // true
console.log(regExp.test('Hello World'));            // false
console.log(regExp.test('Hello Developer'));        // false
console.log(regExp.test('49x30x1234567'));          // false
console.log(regExp.test('61 45 123456789'));        // false
console.log(regExp.test('449 30 1234567'));         // false
