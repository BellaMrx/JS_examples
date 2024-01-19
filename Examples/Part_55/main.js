'use strict';
const coordinates = [
  [40.79, 7.92],
  [33.27, 12.98],
  [44.39, 13.82],
  [61.56, 7.97],
  [67.30, 5.67],
  [77.66, 7.34],
  [52.69, 12.45],
  [82.79, 11.33]
];
for(let i=0; i<coordinates.length; i++) {
  const coordinate = coordinates[i];
  for(let j=0; j<coordinate.length; j++) {
    console.log(coordinate[j]);
  }
}
// output:
// 40.79
// 7.92
// 33.27
// 12.98
// 44.39
// 13.82
// 61.56
// 7.97
// 67.3
// 5.67
// 77.66
// 7.34
// 52.69
// 12.45
// 82.79
// 11.33