'use strict';
function sayHi() {
  console.log('Hello');
  return function() {
    console.log('World');
    return function() {
      console.log('My name is Rick Sample.');
    }
  }
}

sayHi();        // Call the “outer” function
sayHi()();      // Call the “outer” and “middle” function
sayHi()()();    // Call all functions

/* output:
Hello

Hello
World

Hello
World
My name is Rick Sample.
*/