'use strict';
function printPersonalInformation(firstName, lastName, age) {
  if(firstName !== undefined) {
    console.log(`Firstname: ${firstName}`);
  }
  if(lastName !== undefined) {
    console.log(`Lastname: ${lastName}`);
  }
  if(age !== undefined) {
    console.log(`Age: ${age}`);
  }
}
printPersonalInformation('Rick', 'Sample', 62, 1.76);

// output:
// Firstname: Rick
// Lastname: Sample
// Age: 62