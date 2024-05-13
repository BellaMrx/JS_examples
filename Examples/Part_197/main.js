'use strict';
const cityPopulation = new Map();               // Create the map
cityPopulation.set('Tokyo', 37000000);          // Add multiple entries
cityPopulation.set('Delhi', 32000000);
cityPopulation.set('Cairo', 22000000);
cityPopulation.set('New York', 8000000);
cityPopulation.set('Berlin', 4000000);
console.log(cityPopulation.get('Tokyo'));       // output: 37000000
console.log(cityPopulation.size);               // output: 5
console.log(cityPopulation.has('Tokyo'));       // output: true
cityPopulation.delete('Tokyo');                 // Delete an entry
console.log(cityPopulation.has('Tokyo'));       // output: false
console.log(
    cityPopulation.has('Shanghai')              // output: false
);
cityPopulation.clear();                         // Delete all entries
console.log(cityPopulation.size);               // output: 0