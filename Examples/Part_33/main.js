'use strict';
const rick = {
  firstName: 'Rick',
  lastName: 'Sample',
  contact: {
    email: 'rick.sample@email.com'
  }
};

const morty = {
  firstName: 'Morty',
  lastName: 'Sample',
};

if (rick.contact && rick.contact.email) {
  console.log(rick.contact.email);
}

if (morty.contact && morty.contact.email) {
  console.log(morty.contact.email);
}