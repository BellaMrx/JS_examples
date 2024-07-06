// Select elements with querySelectorAll
const tableCells = document.querySelectorAll('#main table td:nth-child(2)');
if(tableCells.length > 0) {
  for(let i=0; i<tableCells.length; i++) {
    const tableCell = tableCells[i];
    tableCell.style.border = '2px solid red';
  }
}
