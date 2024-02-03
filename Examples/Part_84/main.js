'use strict';
function createUser(username, email, password) {
  password = password !== undefined ? password : 'Defaultpassword';
  const user = {
    username: username,
    email: email,
    password: password
  }
  return user;
}
const rick = createUser('Rick Sample', 'rick.sample@example.com', 'secret');
console.log(rick.username);     // Rick Sample
console.log(rick.email);        // rick.sample@example.com
console.log(rick.password);     // secret
const morty = createUser('Morty Sample', 'morty.sample@example.com');
console.log(morty.username);    // Morty Sample
console.log(morty.email);       // morty.sample@example.com
console.log(morty.password);    // Defaultpassword