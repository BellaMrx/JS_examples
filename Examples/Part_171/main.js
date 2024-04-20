'use strict';
const todoList = [
  'Coding',
  'Eating',
  'Relaxing',
  'Sleeping'
];
todoList.copyWithin(
  0,    // Target start position to which the elements are copied
  2,    // Source start position from which copying starts
  4     // Source end position up to which copying takes place
);
console.log(todoList);
// ["Relaxing", "Sleeping", "Relaxing", "Sleeping"]