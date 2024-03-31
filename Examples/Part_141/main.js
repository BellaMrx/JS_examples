'use strict';
const item = {};
Object.defineProperties(item, {
  name: {
    value: 'Nike Dunk Low Retro'
  },
  price: {
    value: 119.99
  },
  product: {
    value: 'Shoes'
  },
  size: {
    value: '9'
  },
  printDescription: {
    value: function() {
      console.log(`${this.product}: ${this.name}`);
    }
  }
});
console.log(item.name);     // "Nike Dunk Low Retro"
console.log(item.price);    // 119.99
console.log(item.product);  // "Shoes"
console.log(item.size);     // "9"