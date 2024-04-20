'use strict';
const names = ['Rick', 'Morty', 'Summer'];
const namesString = names.toString();
console.log(namesString);           // output: Rick,Morty,Summer
const namesLocaleString = names.toLocaleString();
console.log(namesLocaleString);     // output: Rick,Morty,Summer
const namesValue = names.valueOf();
console.log(namesValue);            // output: ["Rick", "Morty", "Summer"]
const namesJoined = names.join('-');
console.log(namesJoined);           // output: Rick-Morty-Summer