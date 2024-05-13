'use strict';
const city1 = {
  name: 'Tokyo'
};
const city2 = {
  name: 'Delhi'
};
const city3 = {
  name: 'Cairo'
};
const city4 = {
  name: 'New York'
};
const city5 = {
  name: 'Berlin'
};
const city6 = {
  name: 'Paris'
};
const cityPopulation = new WeakMap();           // Create the map
cityPopulation.set(city1, 37000000);            // Add multiple entries
cityPopulation.set(city2, 32000000);
cityPopulation.set(city3, 22000000);
cityPopulation.set(city4, 8000000);
cityPopulation.set(city5, 4000000);
console.log(cityPopulation.get(city1));         // output: 37000000
console.log(cityPopulation.has(city1));         // output: true
cityPopulation.delete(city1);                   // Delete an entry
console.log(cityPopulation.has(city1));         // output: false
console.log(
    cityPopulation.has(city6)                   // output: false
);
console.log(cityPopulation);
