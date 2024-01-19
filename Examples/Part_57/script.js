'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const sourceList = document.getElementById('source');         // the source list
  const targetList = document.getElementById('target');         // the target list
  const copyButton = document.getElementById('move');           // the button to
  // move
  copyButton.addEventListener('click', function() {             // When clicking on the
  // button:
    while(sourceList.hasChildNodes()) {                         // As long as there are still entries
  // are still in the source list,
      const item = sourceList.removeChild(                      // the first entry
        sourceList.firstChild);                                 // is removed from this list
      targetList.appendChild(item);                             // and added to the target list
  // added to the target list.
    }
  });
});