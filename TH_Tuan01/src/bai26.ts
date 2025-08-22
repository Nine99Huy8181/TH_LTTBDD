class OrderProduct {
    constructor(public name: string, public price: number, public quantity: number) {}
}

class Order {
    private products: OrderProduct[] = [];
    
    addProduct(product: OrderProduct): void {
        this.products.push(product);
    }
    
    calculateTotal(): number {
        return this.products.reduce((total, product) => 
            total + (product.price * product.quantity), 0);
    }
    
    getProducts(): OrderProduct[] {
        return this.products;
    }
}


const order = new Order();
order.addProduct(new OrderProduct("Laptop", 1000, 1));
order.addProduct(new OrderProduct("Mouse", 25, 2));
console.log(`Total: $${order.calculateTotal()}`);
