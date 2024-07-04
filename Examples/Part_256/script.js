// Selection by class name
const tableRowsEven = document.getElementsByClassName('even');      // Select all even table rows
  if(tableRowsEven.length > 0) {                                    // If at least one element was found
    for(let i = 0; i < tableRowsEven.length; i++) {                 // Go through all elements
      const tableRow = tableRowsEven[i];                            // Assign element to a variable
      tableRow.style.backgroundColor = '#FADBD8';                   // Set new background color
    }
  }

/*
const tableRowsEven = document.getElementsByClassName('even');      // Select all even table rows
  if(tableRowsEven.length > 0) {                                    // If at least one element was found
    for(let i = 0; i < tableRowsEven.length; i++) {                 // Go through all elements
      const tableRow = tableRowsEven.item(i);                       // Assign element to a variable
      tableRow.style.backgroundColor = '#FADBD8';                   // Set new background color
    }
  }
*/

/*
Array.prototype.forEach.call(tableRowsEven, (tableRow) => {
  tableRow.style.backgroundColor = '#FADBD8';
});
*/