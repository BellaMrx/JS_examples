'use strict';
function printContactInformation(
  {
    contact: {
      email: email,
      phone: phone
      }
    }
) {
  console.log(`E-Mail: ${email}`);
  console.log(`Phone: ${phone}`);
}
const person = {
  firstName: 'Rick',
  lastName: 'Sample',
  contact: {
    email: 'rick.sample@mail.com',
    phone: '0169/12345679'
  }
};
printContactInformation(person);

/* output:
E-Mail: rick.sample@mail.com
Phone: 0169/12345679
*/