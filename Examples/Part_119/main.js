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
  
console.log(typeof item);           // object
console.log(item instanceof Item);  // true