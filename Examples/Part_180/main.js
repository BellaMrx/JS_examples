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
  firstName : firstNameExtracted,
  lastName : lastNameExtracted,
  address : {
    postCode : postCodeExtracted,
    street : streetExtracted
    }
  } = person;
console.log(firstNameExtracted);  // "Rick"
console.log(lastNameExtracted);   // "Sample"
console.log(postCodeExtracted);   // "420"
console.log(streetExtracted);     // "Milky Way 42"