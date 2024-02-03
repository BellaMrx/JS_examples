'use strict';
const person = {
  name: 'Rick',                  // object property
  getName: function() {
    return this.name;
  }
}
console.log(person.getName());  // output: Rick