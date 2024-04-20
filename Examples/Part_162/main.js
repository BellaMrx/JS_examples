'use strict';
const todoList = [
  'Coding',
  'Eating',
  'Relaxing',
  'Sleeping'
];
const sliced5 = todoList.slice(-2);   // the last two elements
const sliced6 = todoList.slice(1,     // second element from the beginning to ...
  -1);                                // ... second element from the back
const sliced7 = todoList.slice(1,     // second element from the front to ..
  -2);                                // ... to third element from the end
const sliced8 = todoList.slice(1,     // second element from the front to ...
  -3);                                // ... fourth element from the end
console.log(sliced5);                 // ["Relaxing", "Sleeping"]
console.log(sliced6);                 // ["Eating", "Relaxing"]
console.log(sliced7);                 // ["Eating"]
console.log(sliced8);                 // []