'use strict';
const rick = {
  firstName: 'Rick',
  lastName: 'Sample'
}
console.log(Object.isExtensible(rick));     // true
console.log(Object.isSealed(rick));         // false
console.log(Object.isFrozen(rick));         // false
rick.age = 62;                              // New property
console.log(rick.age);                      // 62
Object.freeze(rick);                        // Freeze object
console.log(Object.isExtensible(rick));     // false
console.log(Object.isSealed(rick));         // true
console.log(Object.isFrozen(rick));         // true
rick.firstName = 'Morty';                   // TypeError: Cannot assign to read only
                                            // property 'firstName' of #<Object>