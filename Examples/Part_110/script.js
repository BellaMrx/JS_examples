'use strict';
function findDuplicates() {
  const numbers = [2, 4, 5, 2, 5, 8, 5, 8611];
  for(let i = 0; i < numbers.length; i++) {
    const numberI = numbers[i];
    for(let j = i + 1; j < numbers.length; j++) {
      const numberJ = numbers[j];
      if(numberI === numberJ) {
        console.log(`Duplicate number found: ${numberI}`);
      }
    }
  }
}
document.addEventListener('DOMContentLoaded', findDuplicates);
