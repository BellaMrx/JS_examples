'use strict';
const regExp = /[0-9][0-9].[0-9][0-9].[0-9][0-9][0-9][0-9][0-9][0-9][0-9]/;
console.log(regExp.test('49 30 1234567'));      // true
console.log(regExp.test('61 45 123456789'));    // true
console.log(regExp.test('84 77 12345'));        // false - because no 13 characters
console.log(regExp.test('Hello World'));        // false
console.log(regExp.test('Hello Developer'));    // false
