'use strict';
const cityPopulation = new Map();               // Create the map
cityPopulation.set('Tokyo', 37000000);          // Add multiple entries
cityPopulation.set('Delhi', 32000000);
cityPopulation.set('Cairo', 22000000);
cityPopulation.set('New York', 8000000);
cityPopulation.set('Berlin', 4000000);

for (let entry of cityPopulation.entries()) {
  console.log(entry[0]);                        // Key
  console.log(entry[1]);                        // Value
}

// Alternatively, access via array destructuring:
for (let [ city, population ] of cityPopulation.entries()) {
  console.log(city);
  console.log(population);
}

/* output:
Tokyo
37000000
Delhi
32000000
Cairo
22000000
New York
8000000
Berlin
4000000
...
*/