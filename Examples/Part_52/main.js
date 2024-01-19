'use strict';
for (
  let i = 1;        // Initialization: is executed before the loop is executed
  i <= 10;          // Condition: is checked before executing an iteration
  i++               // Increment expression: is executed at the end of an iteration
    // executed
) {                 // Loop body: is executed once in each iteration
  console.log(i);
}

// output: 1 2 3 4 5 6 7 8 9 10

// And here again in everyday notation:
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// output: 1 2 3 4 5 6 7 8 9 10