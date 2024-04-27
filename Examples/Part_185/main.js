'use strict';
function printPerson(
  {
    firstName: firstName,
    lastName: lastName,
    contact: {
      email: email,
      phone: phone
      }
    }
) {
  console.log(`${firstName} ${lastName}`);
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
printPerson(person);

/* output:
Rick Sample
E-Mail: rick.sample@mail.com
Phone: 0169/12345679 
*/