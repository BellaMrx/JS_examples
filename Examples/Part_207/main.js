'use strict';
const cities = new Set()               // Create the set
  .add('Tokyo')                        // ... with concatenation
  .add('Delhi')
  .add('Cairo')
  .add('New York')
  .add('Berlin');
console.log(cities.size);              // output: 5