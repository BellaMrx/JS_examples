'use strict';
const transactions = [
  -25.0, 399.99, -39.99, -32.50, 300, 490.99, -25, 300
];
console.log(transactions.indexOf(-25.0));       // output: 0
console.log(transactions.indexOf(400));         // output: -1
console.log(transactions.indexOf(300));         // output: 4
console.log(transactions.indexOf(300, 5));      // output: 7