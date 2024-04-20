'use strict';
const transactions = [
    -25.0, 399.99, -39.99, -32.50, 300, 490.99, -25, 300
];
console.log(transactions.lastIndexOf(-25.0));       // output: 6
console.log(transactions.lastIndexOf(400));         // output: -1
console.log(transactions.lastIndexOf(300));         // output: 7
console.log(transactions.lastIndexOf(300, 5));      // output: 4