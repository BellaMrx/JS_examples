'use strict';
const text = 'The private phone number is +49 30 7654321,' +
  ' the business telephone number is +49 30 1234567.';
const regExp = /\+?\d{2}\s\d{2}\s\d{5,7}/g;
let result;
while ((result = regExp.exec(text)) !== null) {
  console.log(
    'Number ' + result[0]
    + ' found at Index ' + result.index
    + '.'
  );
}

/* output:
Number +49 30 7654321 found at Index 28.
Number +49 30 1234567 found at Index 77.
*/