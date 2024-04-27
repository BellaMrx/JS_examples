'use strict';
// Construction of a "normal" object
const person = {
  firstName : 'Rick',
  lastName : 'Sample'
};

// Object destructuring
const {
  firstName : firstNameExtracted,
  lastName : lastNameExtracted
  } = person;