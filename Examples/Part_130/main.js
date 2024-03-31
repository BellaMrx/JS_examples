'use strict';
// setter and getter when using the object literal notation
const item = {
  _name: 'Nike Dunk Low Retro',
  _price: 119.99,
  _product: 'Shoes',
  _size: '9',
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
}
console.log(item.name); // "Return name"
// "Nike Dunk Low Retro"
item.name = 'Nike Dunk Low Retro - Sold out';
// "Set new name"