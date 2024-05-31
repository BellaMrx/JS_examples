'use strict';
const pattern = /^(\d{4})-(\d{2})-(\d{2})$/u;
const result = pattern.exec('2024-05-28');
console.log(result[0]);    // 2024-05-28
console.log(result[1]);    // 2024
console.log(result[2]);    // 05
console.log(result[3]);    // 28
console.log(result.index); // 0
console.log(result.input); // 2024-05-28