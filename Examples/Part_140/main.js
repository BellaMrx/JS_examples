'use strict';
const item = {};
Object.defineProperty(item, 'name', {
  value: 'Nike Dunk Low Retro'
});
Object.defineProperty(item, 'price', {
  value: 119.99
});
Object.defineProperty(item, 'product', {
  value: 'Shoes'
});
Object.defineProperty(item, 'size', {
  value: '9'
});
Object.defineProperty(item, 'printDescription', {
  value: function() {
    console.log(`${this.product}: ${this.name}`);
  }
});
console.log(item.name);     // "Nike Dunk Low Retro"
console.log(item.price);    // 119.99
console.log(item.product);  // "Shoes"
console.log(item.size);     // "9"