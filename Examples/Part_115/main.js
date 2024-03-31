'use strict';
const array = [
  ['name', 'Nike Dunk Low Retro'],
  ['price', 119.99],
  ['product', 'Shoes'],
  ['size', '9'],
  ['printDescription', function () {
    console.log(`${this.product}: ${this.name}`);
  }]
];

const item = Object.fromEntries(array);
console.log(item.name);     // "Nike Dunk Low Retro"
console.log(item.price);    // 119.99
console.log(item.product);  // "Shoes"
console.log(item.size);     // "9"
item.printDescription();    // "Shoes: Nike Dunk Low Retro"