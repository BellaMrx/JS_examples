'use strict';
const rick = {
    firstName: 'Rick',
    lastName: 'Sample'
};

const morty = {
    firstName: 'Morty',
    lastName: 'Sample'
};

const isRickOrMorty = rick || morty;
console.log(isRickOrMorty);     // output: Object {firstName: "Rick", lastName: "Sample"}
console.log(false || 'Rick');   // output: Rick
console.log('Rick' || null);    // output: Rick
console.log(null || 'Rick');    // output: Rick