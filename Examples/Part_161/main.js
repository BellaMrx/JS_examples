'use strict';
const todoList = [
  'Coding',
  'Eating',
  'Relaxing',
  'Sleeping'
];
const sliced1 = todoList.slice(1);    // from second element
console.log(sliced1);   // ["Eating", "Relaxing", "Sleeping"]

const sliced2 = todoList.slice(2);    // from the third element
console.log(sliced2);   // ["Relaxing", "Sleeping"]

const sliced3 = todoList.slice(0, 2); // first and second element
console.log(sliced3);   // ["Coding", "Eating"]

const sliced4 = todoList.slice(2, 4); // third and fourth element
console.log(sliced4);   // ["Relaxing", "Sleeping"]

// Origin array remains unchanged:
console.log(todoList);  // ["Coding", "Eating", "Relaxing", "Sleeping"]