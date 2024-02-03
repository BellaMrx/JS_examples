'use strict';
function printPersonalInformation(firstName, lastName, age, ...restArgs) {
  console.log(`Firstname: ${firstName}`);
  console.log(`Lastname: ${lastName}`);
  console.log(`Age: ${age}`);
  if(restArgs.length > 0) {
    console.log(`Size: ${restArgs[0]}`);
  }
  if(restArgs.length > 1) {
    console.log(`Weight: ${restArgs[1]}`);
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