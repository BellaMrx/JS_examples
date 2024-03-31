'use strict';
class Item {
  constructor(name, price, product, size) {
    this.name = name;
    this.price = price;
    this.product = product;
    this.size = size;
  }

  printDescription() {
    console.log(`${this.product}: ${this.name}`);
  }
}