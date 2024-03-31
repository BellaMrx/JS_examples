'use strict';
const item = {};
item['name'] = 'Nike Dunk Low Retro';
item['price'] = 119.99;
item['product'] = 'Shoes';
item['size'] = '9';
item['printDescription'] = function() {
  console.log(`${this.product}: ${this.name}`);
}