'use strict';
const todoList = [
  'Coding',
  'Eating',
  'Relaxing',
  'Sleeping'
];
const deletedTodos = todoList.splice(1, 2);
console.log(deletedTodos);  // ["Eating", "Relaxing"]
console.log(todoList);      // ["Coding", "Sleeping"]