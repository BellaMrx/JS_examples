'use strict';
const cities = new Set();              // Create the set
cities.add('Tokyo');                   // Add different values
cities.add('Tokyo');
cities.add('Delhi');
cities.add('Cairo');
cities.add('New York');
cities.add('Berlin');
console.log(cities.size);              // output: 5
console.log(cities.has('Tokyo'));      // output: true
cities.delete('Tokyo');                // Delete a value
console.log(cities.has('Tokyo'));      // output: false
console.log(
  cities.has('Paris')                  // output: false
);
cities.clear();                        // Delete all values
console.log(cities.size);              // output: 0