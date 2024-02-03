'use strict';
function printPersonalInformation(firstName, lastName, age) {
  console.log(`Firstname: ${firstName}`);
  console.log(`Lastname: ${lastName}`);
  console.log(`Age: ${age}`);
  if(arguments.length > 3) {
    console.log(`Size: ${arguments[3]}`);
  }
  if(arguments.length > 4) {
    console.log(`Weight: ${arguments[4]}`);
  }
}
printPersonalInformation('Rick', 'Sample', 62, 1.76, 70);

/* output:
 Firstname: Rick
 Lastname: Sample
 Age: 62
 Size: 1.76
 Weight: 70
 */