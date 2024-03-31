'use strict';
const rick = {
  firstName: 'Rick',
  lastName: 'Sample'
}
console.log(Object.isExtensible(rick));         // true
rick.age = 62;                                  // Define new property
console.log(rick.age);                          // 62
Object.preventExtensions(rick);                 // Prevent extensions
console.log(Object.isExtensible(rick));         // false
rick.firstName = 'Morty';                       // Allowed: change existing property
console.log(rick.firstName);                    // "Morty"
console.log(Object.getOwnPropertyDescriptor(rick, 'firstName').enumerable); // true
Object.defineProperty(rick, 'firstName', {      // Allowed: Change property attributes
  enumerable: false
});
console.log(Object.getOwnPropertyDescriptor(rick, 'firstName').enumerable); // false
rick.weight = 76;                               // TypeError: Can't add property weight,
// object is not extensible