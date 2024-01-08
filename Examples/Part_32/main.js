'use strict';
const rick = {
  firstName: 'Rick',
  lastName: 'Sample',
  contact: {
    email: 'rick.sample@email.com'
  }
};

const morty = {
  firstName: 'Morty',
  lastName: 'Sample',
};

// Access to nested property via 
// Optional chaining operator:
console.log(rick.contact?.email);   // output: rick.sample@email.com
console.log(morty.contact?.email);  // output: undefined

// Alternatively also possible: Use of the
// operator on several hierarchy levels:
console.log(rick?.contact?.email);  // output: rick.sample@email.com
console.log(morty?.contact?.email); // output: undefined

