'use strict';
const symbol1 = Symbol();
const symbol2 = Symbol('exampleDescription');
const symbol3 = Symbol();
const symbol4 = Symbol('exampleDescription');
console.log(symbol1);               // output: Symbol()
console.log(symbol2);               // output: Symbol(exampleDescription)
console.log(symbol3);               // output: Symbol()
console.log(symbol4);               // output: Symbol(exampleDescription)
console.log(symbol1 === symbol3);   // output: false
console.log(symbol2 === symbol4);   // output: false