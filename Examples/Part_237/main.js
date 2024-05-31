'use strict';
const pattern = /^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})$/u;
const result = pattern.exec('2024-05-28');
console.log(result.groups.year);  // 2024
console.log(result.groups.month); // 05
console.log(result.groups.day);   // 28