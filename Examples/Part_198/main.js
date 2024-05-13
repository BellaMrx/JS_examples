'use strict';
const cityPopulation = new Map()        // Create a map ...
  .set('Tokyo', 37000000)               // ... with method chaining
  .set('Delhi', 32000000)
  .set('Cairo', 22000000)
  .set('New York', 8000000)
  .set('Berlin', 4000000);
console.log(cityPopulation.size);       // output: 5