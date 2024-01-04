'use strict';
const name = 'Rick Sample';
const age = 42;
function getName() {
  return name;
}
const message = `My name is ${getName()}, I am twice the age of ${age/2}.`;
console.log(message);
// "My name is Rick Sample, I am twice the age of 21."