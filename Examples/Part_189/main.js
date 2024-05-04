'use strict';
function checkUsername(userName) {
  if(userName.length < 5) {
    console.error('User name must contain at least 5 characters.');
  } else if(userName.length > 8) {
    console.error('User name may contain a maximum of 8 characters.');
  } else {
    console.log('Valid user name');
  }
}
checkUsername('Rick');              // Error, too short
checkUsername('RickSample');        // Error, too long
checkUsername('RickS');             // valid
