'use strict';
const numbers = [2,3,4,5];
function any(array, f) {
  for(let i=0; i<array.length; i++) {
    f(array[i]);
  }
}
function print(item) {
  console.log('Item: ' + item);
}
function printModulo(item) {
  console.log(item + ' % 2 = ' + item % 2);
}
any(numbers, print);
/*
output:
Item: 2
Item: 3  
Item: 4  
Item: 5 
*/
any(numbers, printModulo);
/*
output:
2 % 2 = 0
3 % 2 = 1
4 % 2 = 0
5 % 2 = 1
*/