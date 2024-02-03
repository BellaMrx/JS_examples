'use strict';
function tagFunction(strings, ...replacements) {
  const name = replacements[0]; // "Rick Sample"
  const age = replacements[1];  // 62 or 89
  if (age > 80) {
    return `${strings[0]}${replacements[0]}.`;
    // --> "My name is Rick Sample."
  }
  return `${strings[0]}${name}${strings[1]}${age}${strings[2]}.`;
  // --> "My name is Rick Sample, I am 62 years old."
}

const name = 'Rick Sample';
let age = 62;

let message = tagFunction`My name is ${name}, I am ${age} years old`;
console.log(message);
// My name is Rick Sample, I am 62 years old.

age = 89;
message = tagFunction`My name is ${name}, I am ${age} years old`;
console.log(message);
// My name is Rick Sample


