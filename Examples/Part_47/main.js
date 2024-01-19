'use strict';
const testResultElement = document.getElementById('testResult');
const testResult = 0;           // test result, would normally be calculated
let icon = null;                // Variable that will contain the icon name
if(testResult === 0) {          // Check the test result. If this has the value 0,
  icon = 'pass.png';            // the icon name "pass.png" is used.
} else if(testResult === 1) {   // If the test result has the value 1,
  icon = 'info.png';            // the icon name "info.png" is used.
} else if(testResult === 2) {   // If the test result has the value 2,
  icon = 'warning.png';         // the icon name "warning.png" is used.
} else if(testResult === 3) {   // If the test result has the value 3,
  icon = 'error.png';           // the icon name "error.png" is used.
} else {                        // For all other values
  icon = 'unknown.png';         // the icon name "unknown.png" is used.
}
testResultElement.src = 'img/' + icon;  // Set the respective icon