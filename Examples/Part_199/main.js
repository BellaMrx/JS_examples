'use strict';
const cityPopulation = new Map(         // Create a map ...
  [                                     // ... on the basis of an array
    ['Tokyo', 37000000],
    ['Delhi', 32000000],
    ['Cairo', 22000000],
    ['New York', 8000000],
    ['Berlin', 4000000]
  ]
);
for (const city of cityPopulation.keys()) {
  console.log(city);
}

/* output:
Tokyo
Delhi   
Cairo   
New York
Berlin
*/