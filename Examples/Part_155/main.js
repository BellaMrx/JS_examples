'use strict';
const todoList = [];
let length;
length = todoList.push('Coding');
console.log(length);    // output: 1
length = todoList.push('Eating');
console.log(length);    // output: 2
length = todoList.push('Relaxing', 'Sleeping');
console.log(length);    // output: 4
console.log(todoList);  // output: ["Coding", "Eating", "Relaxing", "Sleeping"]