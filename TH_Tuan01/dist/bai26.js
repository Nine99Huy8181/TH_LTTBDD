"use strict";
class OrderProduct {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}
class Order {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    calculateTotal() {
        return this.products.reduce((total, product) => total + (product.price * product.quantity), 0);
    }
    getProducts() {
        return this.products;
    }
}
const order = new Order();
order.addProduct(new OrderProduct("Laptop", 1000, 1));
order.addProduct(new OrderProduct("Mouse", 25, 2));
console.log(`Total: $${order.calculateTotal()}`);
