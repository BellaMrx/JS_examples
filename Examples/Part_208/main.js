'use strict';
const cities = new Set(         
  [                             
    'Tokyo',
    'Delhi',
    'Cairo',
    'New York',
    'Berlin'
  ]
);

for (let city of cities.keys()) {
  console.log(city);
}
// output: "Tokyo", "Delhi", "Cairo", "New York", "Berlin"

for (let city of cities.values()) {
  console.log(city);
}
// output: "Tokyo", "Delhi", "Cairo", "New York", "Berlin

for (let city of cities.entries()) {
  console.log(city[0]); // Value, e.g. "Tokyo"
  console.log(city[1]); // Value, e.g. "Tokyo"
}

for (let city of cities) {
  console.log(city);
}
// output: "Tokyo", "Delhi", "Cairo", "New York", "Berlin"