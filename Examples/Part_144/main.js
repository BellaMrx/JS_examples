'use strict';
const item = {
  name: 'Nike Dunk Low Retro',
  price: 119.99,
  product: 'Shoes',
  size: ' 9',
  printDescription: function() {
    console.log(`${this.product}: ${this.name}`);
  }
}
for(let property in item) {
  console.log(`Name: ${property}`);
  console.log(`Value: ${item[property]}`);
}

// Output:
/*
Name: name
Value: Nike Dunk Low Retro
Name: price
Value: 119.99
Name: product
Value: Shoes
Name: size
Value:  9
Name: printDescription
Value: function() {
    console.log(`${this.product}: ${this.name}`);
  }
*/

