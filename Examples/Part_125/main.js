'use strict';
const item = Object.create(Object.prototype, {
  name: {
    value: 'Nike Dunk Low Retro',
    writable: false,
    configurable: true,
    enumerable: true
  },
  price: {
    value: 119.99,
    writable: true,
    configurable: true,
    enumerable: true
  },
  product: {
    value: 'Shoes',
    writable: false,
    configurable: true,
    enumerable: true
  },
  size: {
    value: '9',
    writable: false,
    configurable: true,
    enumerable: false       // The "size" property is not output for iteration.
  },
  printDescription: {
    value: function() {
      console.log(`${this.product}: ${this.name}`);
    }
  }
});
for(let property in item) {
  console.log(property);    // Output: "name", "price", "product"
}
item.name = 'Nike Air Force 1';
console.log(item.name);     /* "Nike Dunk Low Retro", because the 
                            property "name" is not "writeable" */
                          
item.price = 95.99;
console.log(item.price);    /* "95.99", because for the property "price" 
                            the "writable" attribute has the value "true" */