'use strict';
const regExp = /^Tortoise$/;
console.log(regExp.test('Tortoise'));       // true
console.log(regExp.test('Baby tortoise'));  // false
console.log(regExp.test('Leonardo'));       // false