function init() {
    // Access to child nodes or child elements:
    (function() {
      const tbody = document.querySelector('tbody');
      console.log(tbody.children.length);   // 4
      console.log(tbody.childElementCount); // 4
      console.log(tbody.childNodes.length); // 9
      console.log(tbody.hasChildNodes());   // true
    })();
  
    // Access to special child nodes and child elements:
    (function() {
      const tbody = document.querySelector('tbody');
      console.log(tbody.firstChild);        // Text node
      console.log(tbody.lastChild);         // Text node
      console.log(tbody.firstElementChild); // <tr>
      console.log(tbody.lastElementChild);  // <tr>
    })();
  
    // Access to special sibling nodes and sibling elements
    (function() {
      const tableCell = document.querySelector('tbody tr:nth-child(2)');
      console.log(tableCell.previousSibling);        // Text node
      console.log(tableCell.nextSibling);            // Text node
      console.log(tableCell.previousElementSibling); // <tr>
      console.log(tableCell.nextElementSibling);     // <tr>
    })();
  
  }
  
  document.addEventListener('DOMContentLoaded', init);