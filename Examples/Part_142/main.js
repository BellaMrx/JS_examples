'use strict';
const item = {
  name: 'Nike Dunk Low Retro',
  price: 119.99,
  product: 'Shoes',
  size: ' 9',
  printDescription: function() {
    console.log(`${this.product}: ${this.name}`);
  }
}
console.log('price' in item);   // output: true
console.log(item.price);        // output: 119.99
delete item.price;              // delete the property
console.log('price' in item);   // output: false
console.log(item.price);        // output: undefined