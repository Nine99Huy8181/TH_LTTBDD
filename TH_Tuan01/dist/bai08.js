"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
const products = [
    new Product("Laptop", 1200),
    new Product("Mouse", 25),
    new Product("Keyboard", 150),
    new Product("Monitor", 300),
    new Product("Pen", 5)
];
const filterProducts = products.filter((p) => p.price > 100);
console.log(filterProducts);
