class Person{
    constructor(public name: string, public age: number){}

    displayInfor(){
        console.log(`Name: ${this.name}, Age ${this.age}`);
    }
}

class Student extends Person{
    constructor(name: string, age: number, public grade: string){
        super(name, age)
    }

    displayAllInfor(): void{
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}

const person = new Person('Huy', 20)
person.displayInfor()
const student = new Student('Huy', 21, '10')
student.displayAllInfor()