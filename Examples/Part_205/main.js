'use strict';
const cities = new Set(         // Create a set ...
  [                             // ... on the basis of an array
    'Tokyo',
    'Tokyo',
    'Delhi',
    'Cairo',
    'New York',
    'Berlin'
  ]
);
console.log(cities.size);      // output: 5