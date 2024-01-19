'use strict';
const selectElement = document.getElementById('grade');     // the selection list
const options = [                                           // a list with values
  'Very good',
  'Good',
  'Satisfactory',
  'Sufficient',
  'Unsatisfactory',
  'Insufficient'
];
for(let i=0; i<options.length; i++) {                       // For each value in
                                                            // of the list
  const optionElement = document.createElement('option');   // create a
                                                            // selection element,
  const optionText = document.createTextNode(options[i]);   // create the
                                                            // corresponding text,
  optionElement.appendChild(optionText);                    // append the text
                                                            // the element
  selectElement.appendChild(optionElement);                 // and append the element
                                                            // to the selection list.
}