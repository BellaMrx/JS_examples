'use strict';
const item = Object.create(Object.prototype, {
  name: {
    set: function(newName) {
      if (typeof newName === 'string') {
        console.log('Set new name');
        this._name = newName;
      } else {
        throw new TypeError('Name must be a character string.')
      }
    },
    get: function() {
        console.log('Return name');
        return this._name;
    }
    /* Analog for the other properties */
  }
});
// "Set new name"
item.name = 'Nike Dunk Low Retro - Sold out';
// "Return name"
console.log(item.name);
// Output:
// "Nike Dunk Low Retro - Sold out"