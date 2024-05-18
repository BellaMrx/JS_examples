'use strict';
const date1 = new Date();    // current date and time

const date2 = new Date(1234765000000); // Date based on milliseconds
// since 01.01.1970

const date3 = new Date("04 20 2024"); // Date based on string

const date4 = new Date( // Date based on ...
  2022, // ... Year ...
  6, // ... Month ...
  14, // ... Day ...
  14, // ... Hours ...
  23, // ... Minutes ...
  30, // ... Seconds ...
  30 // ... and Milliseconds
);

console.log(date1); // here: 2024-05-14T14:13:39.074Z
console.log(date2); // here: 2009-02-16T06:16:40.000Z
console.log(date3); // here: 2024-04-19T22:00:00.000Z
console.log(date4); // here: 2022-07-14T12:23:30.030Z

console.log(date1.getDay());        // here: 2
console.log(date1.getDate());       // here: 14
console.log(date1.getMonth());      // here: 4



