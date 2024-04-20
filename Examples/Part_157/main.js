'use strict';
const todoList = [
  'Coding',
  'Eating',
  'Relaxing',
  'Sleeping'
];
todoList.splice(
  2,                    // Index from which to insert
  0,                    // Number of elements to be deleted
  'Shopping'            // Element to be added
);
console.log(todoList);
// [
// "Coding",
// "Eating",
// "Shopping",
// "Relaxing",
// "Sleeping"
// ]
todoList.splice(
  2,                    // Index from which to insert
  0,                    // Number of elements to be deleted
  'Napping',            // Elements that are added ...
  'Soccer training'     // ... are to be
);
console.log(todoList);
/* [
 "Coding",
 "Eating",
 "Napping",
 "Soccer training",
 "Shopping",
 "Relaxing",
 "Sleeping"
 ] */