'use strict';
const contacts = [
  {
    firstName: 'Rick',
    lastName: 'Sample',
    email: 'rick.sample@mail.com'
  },
  {
    firstName: 'Morty',
    lastName: 'Sample',
    email: 'cool.morty@mail.com'
  },
  {
    firstName: 'Summer',
    lastName: 'Sample',
    email: 'summer@mail.com'
  }
];
function compareByFirstName(contact1, contact2) {
  return contact1.firstName.localeCompare(contact2.firstName);
}
function compareByLastName(contact1, contact2) {
  return contact1.lastName.localeCompare(contact2.lastName);
}
function compareByEmail(contact1, contact2) {
  return contact1.email.localeCompare(contact2.email);
}
contacts.sort(compareByFirstName);  // Sort by first name
console.log(contacts[0].firstName); // Morty
console.log(contacts[1].firstName); // Rick
console.log(contacts[2].firstName); // Summer
contacts.sort(compareByLastName);   // Sort by last name
console.log(contacts[0].firstName); // Morty
console.log(contacts[1].firstName); // Rick
console.log(contacts[2].firstName); // Summer
contacts.sort(compareByEmail);      // Sort by e-mail address
console.log(contacts[0].firstName); // Morty
console.log(contacts[1].firstName); // Rick
console.log(contacts[2].firstName); // Summer