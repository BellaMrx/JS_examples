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
const properties = Object.keys(item);
for(let i=0; i<properties.length; i++) {
  const property = properties[i];
  console.log(`Name: ${property}`);
  console.log(`Value: ${item[property]}`);
}
printArray(properties);
function printArray(array) {
  for(let i=0; i<array.length; i++) {
    console.log(array[i]);
  }
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
Value: 9
Name: printDescription
Value: function() {
    console.log(`${this.product}: ${this.name}`);
  }
name
price
product
size
printDescription
*/