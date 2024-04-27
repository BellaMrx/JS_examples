'use strict';
const person = {
  firstName: 'Rick',
  lastName: 'Sample',
  age: 62,
  hairColor: 'gray',
  height: 1.7
};
const {
  firstName,
  lastName,
  ...properties
} = person;
console.log(firstName);  
console.log(lastName);  
console.log(properties); 

/* output:
Rick
Sample
{ age: 62, hairColor: 'gray', height: 1.7 }
*/