'use strict';
const person = {
  firstName : 'Rick',
  lastName : 'Sample',
  address : {
    postCode : '420',
    street : 'Milky Way 42'
  },
  phoneNumbers : [
    '0169/12345677',
    '0169/12345679'
  ]
}
const {
  firstName : firstNameExtracted,
  lastName : lastNameExtracted,
  address : {
    postCode : postCodeExtracted,
    street : streetExtracted
    },
  phoneNumbers : [
    phoneNumber1Extracted,
    phoneNumber2Extracted
    ]
  } = person;
console.log(firstNameExtracted);      // "Rick"
console.log(lastNameExtracted);       // "Sample"
console.log(postCodeExtracted);       // "420"
console.log(streetExtracted);         // "Milky Way 42"
console.log(phoneNumber1Extracted);   // "0169/12345677"
console.log(phoneNumber2Extracted);   // "0169/12345679"