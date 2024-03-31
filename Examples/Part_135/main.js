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

item.brand = 'Nike Dunk Low Retro';
item.order = function() {
  console.log('The item was ordered successfully.');
}