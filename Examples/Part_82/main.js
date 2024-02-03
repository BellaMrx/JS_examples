'use strict';
function createUser(username, email, password) {
  const user = {
    username: username,
    email: email,
    password: password
  }
  return user;
}
const rick = createUser('Rick Sample', 'rick.sample@example.com', 'secret');
console.log(rick.username);         // Rick Sample
console.log(rick.email);            // rick.sample@example.com
console.log(rick.password);         // secret