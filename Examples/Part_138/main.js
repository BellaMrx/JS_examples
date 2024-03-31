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

const item2 = {};
item2.name = 'Nike Dunk Low Retro';
item2.price = 119.99;
item2.author = 'Shoes';
item2.isbn = '9';
item2.printDescription = function() {
  console.log(`${this.product}: ${this.name}`);
}