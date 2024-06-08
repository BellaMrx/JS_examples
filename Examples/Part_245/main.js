'use strict';
const numbers = [2,3,4,5];
function print(item) {
  console.log('Item: ' + item);
}
function modulo(item) {
  console.log(item + ' % 2 = ' + item % 2);
}
numbers.forEach(print);
numbers.forEach(modulo);

/* output:
Item: 2
Item: 3
Item: 4
Item: 5
2 % 2 = 0
3 % 2 = 1
4 % 2 = 0
5 % 2 = 1
 */