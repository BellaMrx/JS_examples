'use strict';
const todoList = [];
let length;
length = todoList.unshift('Coding');
console.log(length);    // 1
length = todoList.unshift('Eating');
console.log(length);    // 2
length = todoList.unshift('Relaxing', 'Sleeping');
console.log(length);    // 4
console.log(todoList);  // ["Relaxing", "Sleeping", "Eating", "Coding"]