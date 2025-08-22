class BaseAnimal {
    constructor(public name: string) {}
}

class DogClass extends BaseAnimal{
    bark():void{
        console.log('Say gau');
    }
}

class Cat extends BaseAnimal{
    moew():void{
        console.log('Meo meo');
        
    }
}