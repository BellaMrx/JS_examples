'use strict';
function createUser(username, email, password) {
  const user = {
    username: username,
    email: email,
    password: password
  }
  return user;
}
const userData1 = ['Rick Sample', 'rick.sample@example.com', 'secret'];
const userData2 = ['Morty Sample', 'morty.sample@example.com', 'password'];

const rick = createUser(
  ...userData1
);
const morty = createUser(
  ...userData2
);
console.log(rick);
console.log(morty);

/* output:
{
  username: 'Rick Sample',
  email: 'rick.sample@example.com',
  password: 'secret'
}
{
  username: 'Morty Sample',
  email: 'morty.sample@example.com',
  password: 'password'
}
 */