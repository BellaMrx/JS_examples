// Selection by name
const inputElementsForGenre = document.getElementsByName('genre');  // Select all elements with names
  if(inputElementsForGenre.length > 0) {                            // If at least one element was found
    for(let i = 0; i < inputElementsForGenre.length; i++) {         // Go through all elements
      const inputElement = inputElementsForGenre[i];                // Assign element to a variable
      console.log(inputElement.value);                              // output: Pop, Rock, Electro
    }
  }