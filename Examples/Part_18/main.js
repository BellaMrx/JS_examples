'use strict';
const dog = {
  name: 'Snuffles'
}
const person = {
  firstName: 'Rick',
  lastName: 'Sample',
  pet: dog
}
console.log(person.pet); // output: Object {name: "Snuffles"}
person.pet = null;
console.log(person.pet); // output: null