"use strict";
class Dog {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log(`${this.name} say Gau`);
    }
}
const dog = new Dog('Phen');
console.log(dog.sound());
