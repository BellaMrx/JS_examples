'use strict';
const rick = {
  firstName: 'Rick',
};
rick.firstName ||= 'Morty';
rick.lastName ||= 'Sample';
console.log(rick);
// { firstName: 'Rick', lastName: 'Sample' }

// The following was necessary before ES2021:
const jerry = {
    firstName: 'Jerry',
  };
  jerry.firstName || (jerry.firstName = 'Morty');
  jerry.lastName || (jerry.lastName = 'Sample');
  console.log(jerry);
  // { firstName: 'Jerry', lastName: 'Sample' }