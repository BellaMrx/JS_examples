'use strict';
const item = {
  number: '',               // item number
  _name: '',
  /* Here the other properties */
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
// Data property
item.number = '246813579';
console.log(item.number);

// Possible, but not desired, as access should be via set and get.
item._name = 'Nike Dunk Low Retro';
console.log(item._name);

// Access property
item.name = 'Nike Dunk Low Retro - Sold out';
console.log(item.name);