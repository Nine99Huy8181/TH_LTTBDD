"use strict";
class BaseAnimal {
    constructor(name) {
        this.name = name;
    }
}
class DogClass extends BaseAnimal {
    bark() {
        console.log('Say gau');
    }
}
class Cat extends BaseAnimal {
    moew() {
        console.log('Meo meo');
    }
}
