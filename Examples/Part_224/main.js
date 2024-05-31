'use strict';
const regExp = /\bplay\b/;
console.log(regExp.test('I play the guitar.'));         // true
console.log(regExp.test('I am a guitar player.'));      // false