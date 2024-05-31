'use strict';
const text = 'The phone number is +49 30 1234567.';
const regExp = /\+?\d{2}\s\d{2}\s\d{5,7}/;
const result = regExp.exec(text)
console.log(
  'Number ' + result[0]
  + ' found at Index ' + result.index
  + '.'
);

/* output:
 Number +49 30 1234567 found at Index 20.
*/