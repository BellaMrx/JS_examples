'use strict';
const item = {
  name: 'Nike Dunk Low Retro',
  price: 119.99,
  product: 'Shoes',
  size: '9',
  printDescription: function() {
    console.log(`${this.product}: ${this.name}`);
  }
}

const keys = Object.keys(item);
console.log(keys);
// [
// 'name',
// 'price',
// 'product',
// 'size',
// 'printDescription'
// ]
const values = Object.values(item);
console.log(values);
// [
// 'Nike Dunk Low Retro',
// 119.99,
// 'Shoes',
// '9',
// [Function: printDescription]
// ]
const entries = Object.entries(item);
console.log(entries);
// [
// [ 'name', 'Nike Dunk Low Retro' ],
// [ 'price', 119.99 ],
// [ 'product', 'Shoes' ],
// [ 'size', '9' ],
// [ 'printDescription', [Function: printDescription] ]
// ]