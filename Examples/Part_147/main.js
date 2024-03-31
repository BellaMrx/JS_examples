'use strict';
const firstName = Symbol('firstName');
const lastName = Symbol('lastName');
const person = {};
person[firstName] = 'Rick';
person[lastName] = 'Sample';
console.log(person[firstName]);     // "Rick"
console.log(person[lastName]);      // "Sample"
console.log(person[0]);             // undefined
console.log(person[1]);             // undefined
console.log(person.firstName);      // undefined
console.log(person.lastName);       // undefined
console.log(person['firstName']);   // undefined
console.log(person['lastName']);    // undefined