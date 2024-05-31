'use strict';
const text = 'Rick,Sample,420,62,176,72';
const result = text.split(',');
const firstName = result[0];
const lastName = result[1];
const id = result[2];
const age = result[3];
const height = result[4];
const weight = result[5];
console.log(firstName);   // Rick
console.log(lastName);    // Sample
console.log(id);          // 420
console.log(age);         // 62
console.log(height);      // 176
console.log(weight);      // 72