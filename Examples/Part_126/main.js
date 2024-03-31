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
const propertyDescriptor = Object.getOwnPropertyDescriptor(item, 'name');
console.log(propertyDescriptor.enumerable);       // true
console.log(propertyDescriptor.configurable);     // true
console.log(propertyDescriptor.writable);         // true
console.log(propertyDescriptor.value);            // "Nike Dunk Low Retro"