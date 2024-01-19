'use strict';
const testResultElement = document.getElementById('testResult');
const testResult = 0;       // test result, would normally be calculated
let icon = null;            // Variable that will contain the icon name
switch(testResult) {        // Check the test result
  case 0:                   // If this has the value 0
  case 1:                   // or the value 1,
    icon = 'pass.png';      // the icon name "pass.png" is used.
    break;                  // abort
  case 2:                   // If the test result has the value 2
  case 3:                   // or the value 3,
    icon = 'error.png';     // the icon name "error.png" is used.
    break;                  // abort
  default:                  // For all other values
    icon = 'unknown.png';   // the icon name "unknown.png" is used.
}
testResultElement.src = 'img/' + icon;