class Product{
    constructor(public name: string, public price: number){}
}

const products = [
    new Product("Laptop", 1200),
    new Product("Mouse", 25),
    new Product("Keyboard", 150),
    new Product("Monitor", 300),
    new Product("Pen", 5)
]

const filterProducts = products.filter((p) => p.price > 100)
console.log(filterProducts);
