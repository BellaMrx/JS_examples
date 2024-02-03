'use strict';
function getNameGlobal() {
  return this.name;
}
const person = {
  name : 'Morty',
  getName : getNameGlobal
}
const artist = {
  name : 'Metallica',
  getName : getNameGlobal
}
console.log(person.getName());  // output: Morty
console.log(artist.getName());  // output: Metallica