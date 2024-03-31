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

// Access to object properties and object methods with dot notation
const itemName = item.name;
item.printDescription();
