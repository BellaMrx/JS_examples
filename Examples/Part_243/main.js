// Definition of the function that expects another function as an argument
function functionA(f) {
    console.log('Function A Start'); // Call the passed function
    f();
    console.log('Function A End');
  }
  function functionB() {
    console.log('Function B Start');
    console.log('Function B End');
  }
  // Call with a function via its name
  functionA(functionB);
  // functionA(functionB()); // This does not work.

  // Call with an anonymous function as argument
  functionA(function() {
    console.log('Anonymous function Start');
    console.log('Anonymous function End');
  });

/* output:
Function A Start
Function B Start        
Function B End
Function A End
Function A Start        
Anonymous function Start
Anonymous function End  
Function A End
 */