'use strict';
const person = {
  'first-name': 'Rick',
  'last-name': 'Sample'
}
// console.log(person.first-name);  // Syntax error
// console.log(person.last-name);   // Syntax error
console.log(person['first-name']);  // "Rick"
console.log(person['last-name']);   // "Sample"

const firstName = 'first-name';
const lastName = 'last-name';

console.log(person[firstName]);  // "Rick"
console.log(person[lastName]);   // "Sample"

const name = 'name';
const prefixFirstName = 'first-';
const prefixLastName = 'last-';

console.log(person[prefixFirstName + name]);  // "Rick"
console.log(person[prefixLastName + name]);   // "Sample"