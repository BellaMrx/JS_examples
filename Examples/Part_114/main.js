'use strict';
const item = {
    name: 'Nike Dunk Low Retro',
    product: 'Shoes',
    price: 119.99,
    size: '9',
    printDescription: function () {
        console.log(`${this.product}: ${this.name}`);
    }
}
console.log(item.name);     // "Nike Dunk Low Retro"
console.log(item.product);  // "Shoes"
console.log(item.price);    // 119.99
console.log(item.size);     // "9"
item.printDescription();    // "Shoes: Nike Dunk Low Retro"