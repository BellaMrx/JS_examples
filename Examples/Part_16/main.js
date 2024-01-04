'use strict';
const item = {
  model: 'Nike air max one',
  price: 149.90,
  category: 'Shoes',
  itemNr: '1-234-567-89',
  printDescription: function() {
    console.log(`${this.modell}: ${this.price}`);
  }
}