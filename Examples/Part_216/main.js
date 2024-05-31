'use strict';
const regExp = /............./;
console.log(regExp.test('49 30 1234567'));    // true
console.log(regExp.test('61 45 123456789'));  // true
console.log(regExp.test('84 77 12345'));      // false

/* International phone numbers consist of a 
country code (e.g. Germany +49, Australia +61), 
followed by a space and the area code (here e.g. 30), 
followed by another space and 
the actual phone number (here e.g. 12345...).*/

console.log(regExp.test('Hello World'));        // false
console.log(regExp.test('Hello Developer'));    // true
console.log(regExp.test('Hello JavaScript'));   // true