'use strict';
const testResultElement = document.getElementById('testResult');
const testResult = 0;       // test result, would normally be calculated
let icon = null;            // Variable that will contain the icon name
switch(testResult) {        // Check the test result
  case 0:                   // If this has the value 0,
    icon = 'pass.png';      // the icon name "pass.png" is assigned,
    // but not canceled.
  case 1:                   // If the test result has the value 1,
    icon = 'info.png';      // the icon name "info.png" is assigned,
    // but not canceled.
  case 2:                   // If the test result has the value 2,
    icon = 'warning.png';   // the icon name "warning.png" is assigned,
    // but not canceled.
  case 3:                   // If the test result has the value 3,
    icon = 'error.png';     // the icon name "error.png" is assigned,
    // but not canceled.
  default:                  // For all other values (and all cases above)
    icon = 'unknown.png';   // the icon name "unknown.png" is used.
}
testResultElement.src = 'img/' + icon;