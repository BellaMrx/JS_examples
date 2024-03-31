'use strict';
const rick = {
  firstName: 'Rick',
  lastName: 'Sample'
}
console.log(Object.isExtensible(rick));     // true
console.log(Object.isSealed(rick));         // false
rick.age = 62;                              // Define new property
console.log(rick.age);                      // 62
Object.seal(rick);                          // Seal object
console.log(Object.isExtensible(rick));     // false
console.log(Object.isSealed(rick));         // true
rick.firstName = 'Morty';                   // Allowed: change existing property
console.log(rick.firstName);                // "Morty"
console.log(Object.getOwnPropertyDescriptor(rick, 'firstName').enumerable); // true
Object.defineProperty(rick, 'firstName', {  // Uncaught TypeError: Cannot redefine
// property: firstName
  enumerable: false
});