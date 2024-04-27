'use strict';
const firstName = 'Rick';
const lastName = 'Sample';
const properties = {
  age: 62,
  hairColor: 'gray',
  height: 1.7
};
const person = {
  firstName,
  lastName,
  ...properties
};
console.log(person);

/* output:
{
firstName: 'Rick',
lastName: 'Sample',
age: 62,
hairColor: 'gray',
height: 1.7
}
*/