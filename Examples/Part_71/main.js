'use strict';
function printPersonalInformation(firstName, lastName, age) {
  console.log(`Firstname: ${firstName}`);
  console.log(`Lastname: ${lastName}`);
  console.log(`Age: ${age}`);
}
printPersonalInformation('Rick', 'Sample', 62);
printPersonalInformation('Morty', 'Sample', 14);

// output:
// Firstname: Rick
// Lastname: Sample
// Age: 62
// Firstname: Morty
// Lastname: Sample
// Age: 14