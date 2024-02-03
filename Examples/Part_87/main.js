function logNames() {
    Array.prototype.forEach.apply(arguments, [
      function(argument) {
        console.log(argument);
      }
    ]);
  }
  logNames("Rick", "Morty");

// output:
// Rick
// Morty