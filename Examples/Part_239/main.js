'use strict';
let text = 'The private phone number is +49 30 7654321,' +
  ' the business phone number is +49 30 1234567.';
const regExp = /(\+?\d{2})\s(\d{2})\s(\d{5,7})/g;
text = text.replace(regExp, '<Hidden number>');
console.log(text);

/* output:
The private phone number is <Hidden number>, 
the business phone number is <Hidden number>. */