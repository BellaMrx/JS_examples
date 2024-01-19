'use strict';
const age = prompt('What age are you looking for movie tips?');
if(age >= 6) {
  console.log('Show movies with AU6.');
} else if(age >= 12) {
  console.log('Show movies with AU6 and AU12.');
} else if(age >= 16) {
  console.log('Show movies with AU6, AU12 and AU16.');
} else if(age >= 18) {
  console.log('Show movies with AU6, AU12, AU16 and AU18.');
}

// AU = Age under
// replace prompt with console.log --> run terminal