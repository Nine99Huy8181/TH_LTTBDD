class Car{
    constructor(public brand: string, public model: string, public year: number){}

    showCarInfor(): void{
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
}

const car = new Car('BMW', '200ML', 2000)
car.showCarInfor()
