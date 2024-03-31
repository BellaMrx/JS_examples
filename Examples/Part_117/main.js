'use strict';
function Item(name, price, product, size) {
    this.name = name;
    this.price = price;
    this.product = product;
    this.size = size;
    this.printDescription = function() {
      console.log(`${this.product}: ${this.name}`);
    }
  }

const item = new Item(
  'Nike Dunk Low Retro',
  'Shoes',
  119.99,
  '9'
)

console.log(item.name);         // "Nike Dunk Low Retro"
console.log(item.product);      // "Shoes"
console.log(item.price);        // 119.99
console.log(item.size);         // "9"
item.printDescription();        // "Shoes: Nike Dunk Low Retro"

const item2 = new Item(
  'Nike Air Force 1',
  'Shoes',
  95.99,
  '9'
)

console.log(item2.name);        // "Nike Air Force 1"
console.log(item2.product);     // "Shoes"
console.log(item2.price);       // 95.99
console.log(item2.size);        // "9"
item2.printDescription();       // "Nike Air Force 1"