'use strict';

function compare(value1, value2) {
    if (value1 < value2) {
      return -1;  // The first value is smaller than the second value.
    } else if(value1 > value2) {
      return 1;   // The first value is greater than the second value.
    } else {
      return 0;   // Both values are the same.
    }
  }

const values = [7, 5, 6, 9, 5, 2, 4];
values.sort(compare);
console.log(values); // 2, 4, 5, 5, 6, 7, 9