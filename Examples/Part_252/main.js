function logNames() {
    console.log(arguments);
    /* 
    arguments.forEach(function(argument) {
        console.log(argument);
    });

    output: Error: arguments is not an array 
    */
  }
  logNames("Rick", "Morty");    // output: [Arguments] { '0': 'Rick', '1': 'Morty' }
