'use strict';
let x = 420;
console.log(x); // output: 420
x = 42;
console.log(x); // output: 42

/* JavaScript is executed in Standard mode without any 
 precaution. In strict mode some constructs can cause errors
 that are executable in standard mode without any problem, 
 because there are some restrictions in strict mode. This 
 sounds bad at first, but since JavaScript is very fault 
 tolerant, the website may work locally, but as soon as the 
 website is hosted, errors may occur. And that's where the 
 use strict mode is helpful, because it doesn't allow these 
 errors from the beginning. */