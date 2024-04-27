'use strict';
const person = {
  firstName : 'Rick',
  lastName : 'Sample',
  address : {
    postCode : '420',
    street : 'Milky Way 42'
  }
}
const {
  firstName,
  lastName,
  address : {
    postCode,
    street
    }
  } = person;
console.log(firstName);   // "Rick"
console.log(lastName);    // "Sample"
console.log(postCode);    // "420"
console.log(street);      // "Milky Way 42"
