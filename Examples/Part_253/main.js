function logNames() {
    Array.prototype.forEach.call(arguments, function(argument) {
      console.log(argument);
    });
  }
  logNames("Rick", "Morty");    
  
/*  output: 
Rick 
Morty
*/ 