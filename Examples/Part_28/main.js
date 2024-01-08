'use strict';
const someNullValue = null;
const someUndefinedValue = undefined;
const someNumber = 0;
const someText = '';
const someBoolean = false;

// Left operand null --> Return of the right operand
const a = someNullValue ?? 'Default value for null';
console.log(a);
// output: Default value for null

// Left operand undefined --> Return of the right operand
const b = someUndefinedValue ?? 'Default value for undefined';
console.log(b);
// output: Default value for undefined

// Left operand 0 ("falsy") --> Return of the left operand
const c = someNumber ?? 42;
console.log(c);
// output: 0

// Left operand empty string ("falsy") --> Return of the left operand
const d = someText ?? 'Default value for empty string';
console.log(d);
// output: ''

// Left operand false --> Return of the left operand
const e = someBoolean ?? true;
console.log(e);
// output: false

const x = 420;

console.log({} ?? x);                // {}
console.log(false ?? x);             // false
console.log(x ?? null);              // 420
console.log(null ?? x);              // 420
console.log(null ?? null);           // null
console.log(x ?? NaN);               // 420
console.log(NaN ?? x);               // NaN
console.log(x ?? undefined);         // 420
console.log(undefined ?? x);         // 420
console.log(undefined ?? undefined); // undefined