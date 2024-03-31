'use strict';
function Item(name, price, product, size) {
  this._name = name;
  this._price = price;
  this._product = product;
  this._size = size;
}
Item.prototype = {
  set name(newName) {
    if(typeof newName === 'string') {
      console.log('Set new name');
      this._name = newName;
    } else {
      throw new TypeError('Name must be a character string.')
    }
  },
  get name() {
    console.log('Return name');
    return this._name;
  }
  /* Analog for the other properties */
};
const item = new Item(
  'Nike Dunk Low Retro',
  119.99,
  'Shoes',
  '9'
)
console.log(item.name); // "Return name"
// "Nike Dunk Low Retro"
item.name = 'Nike Dunk Low Retro - Sold out';
// "Set new name"