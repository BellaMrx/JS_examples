'use strict';
const todoList = [
  'Coding',
  'Eating',
  'Relaxing',
  'Sleeping'
];
const item1 = todoList.shift();
console.log(item1); // output: Coding
const item2 = todoList.shift();
console.log(item2); // output: Eating
const item3 = todoList.shift();
console.log(item3); // output: Relaxing
const item4 = todoList.shift();
console.log(item4); // output: Sleeping
const item5 = todoList.shift();
console.log(item5); // output: undefined