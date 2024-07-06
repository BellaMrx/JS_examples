// Selection by element name
const tableCells = document.getElementsByTagName('td');
if(tableCells.length > 0) {                         // If at least one element was found
  for(let i = 0; i < tableCells.length; i++) {      // Go through all elements
    const tableCell = tableCells[i];                // Assign element to a variable
    tableCell.style.fontFamily = 'Verdana';         // Set new font
    tableCell.style.fontSize = '12px';              // Set new font size
  }
};