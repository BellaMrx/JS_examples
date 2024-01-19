'use strict';
// No best practice: Boolean conditions within a switch statement
const age = prompt('What age are you looking for movie tips for?');
switch(true) {
  case (age >= 18):
    console.log('Show movies with AU6, AU12, AU16 and AU18.');
    break;
  case (age >= 16):
    console.log('Show movies with AU6, AU12 and AU16.');
    break;
  case (age >= 12):
    console.log('Show movies with AU6 and AU12.');
    break;
  case (age >= 6):
    console.log('Show movies with AU6.');
    break;
}

// AU = Age under
// replace prompt with console.log --> run terminal
// output: 
// What age are you looking for movie tips for?