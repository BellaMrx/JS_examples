'use strict';
const cityPopulation = new Map();           // Create the map
cityPopulation.set('Tokyo', 37000000);      // Add multiple entries
cityPopulation.set('Delhi', 32000000);
cityPopulation.set('Cairo', 22000000);
cityPopulation.set('New York', 8000000);
cityPopulation.set('Berlin', 4000000);
for (let population of cityPopulation.values()) {
  console.log(population);
}

/* output:
37000000
32000000
22000000
8000000
4000000
*/