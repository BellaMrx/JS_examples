'use strict';
const todoList = [
  'Coding',
  'Eating',
  'Relaxing',
  'Sleeping'
];
const item1 = todoList.pop();
console.log(item1); // output: Sleeping
const item2 = todoList.pop();
console.log(item2); // output: Relaxing
const item3 = todoList.pop();
console.log(item3); // output: Eating
const item4 = todoList.pop();
console.log(item4); // output: Coding
const item5 = todoList.pop();
console.log(item5); // output: undefined