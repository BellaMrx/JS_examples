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
const cities = new WeakSet(
  [
    city1,
    city2,
    city3,
    city4,
    city5
  ]
);
console.log(cities.has(city1));     // output: true
cities.delete(city1);               // Delete a value
console.log(cities.has(city1));     // output: false
console.log(
  cities.has(city6)                  // output: false
);
console.log(cities);