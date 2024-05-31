'use strict';
const text = 'This text contains a phone number: +49 30 1234567.';
const text2 = 'This text does not contain a phone number.';
const regExp = /(\+?\d{2})\s(\d{2})\s(\d{5,7})/g;
console.log(text.search(regExp));   // output: 35
console.log(text2.search(regExp));  // output: -1