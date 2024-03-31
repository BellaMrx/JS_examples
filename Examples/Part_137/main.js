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
console.log(item.brand);        // output: Nike Dunk Low Retro
item.order();                   // output: The item was ordered successfully.

// Override the property
item.brand = 'Nike Air Force 1';
// Override the method
item.order = function() {
  console.log(`The article ${this.brand} was ordered successfully.`);
}
console.log(item.brand);        // output: Nike Air Force 1
item.order();                   // output: The item Nike Air Force 1 was successfully ordered.