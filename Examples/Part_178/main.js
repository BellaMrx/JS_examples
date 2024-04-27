'use strict';
const mostUsedBrowser = [
  'Google Chrome',
  'Safari',
  'Firefox',
  'Edge'
];
const [
  one,
  , // No variable is entered here
  three,
  four
  ] = mostUsedBrowser;
console.log(one);     // "Google Chrome"
// console.log(two);  // Error, as not defined
console.log(three);   // "Firefox"
console.log(four);    // "Edge"