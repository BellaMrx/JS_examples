'use strict';
const rick = {
  firstName: 'Rick',
  lastName: 'Sample'
};
const morty = {
  firstName: 'Morty',
  lastName: 'Sample'
};
const isRickAndMorty = rick && morty;
console.log(isRickAndMorty);    // output: Object {firstName: "Morty",
                                                // lastName: "Sample"}
console.log(false && 'Rick');   // output: false
console.log('Rick' && null);    // output: null
console.log(null && 'Rick');    // output: null