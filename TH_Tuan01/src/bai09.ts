interface Animal{
    name: string;
    sound(): void;
}

class Dog implements Animal{
    constructor(public name: string){}
    sound(): void {
        console.log(`${this.name} say Gau`)
    }
}

const dog = new Dog('Phen');
console.log(dog.sound());
