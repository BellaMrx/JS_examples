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

console.log(Item.prototype);              // Item {}
console.log(item.__proto__);              // Item {}
console.log(Object.getPrototypeOf(item)); // Item {}
console.log(item.constructor);            // function Item(...)