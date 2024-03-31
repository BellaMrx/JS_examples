'use strict';
function Item(name, price, product, size) {
  this.name = name;
  this.price = price;
  this.product = product;
  this.size = size;
  this.printDescription = function() {
    console.log(`${this.product}: ${this.name}`);
  }
}