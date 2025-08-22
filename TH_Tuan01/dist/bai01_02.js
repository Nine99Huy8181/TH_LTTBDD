"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfor() {
        console.log(`Name: ${this.name}, Age ${this.age}`);
    }
}
exports.Person = Person;
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    displayAllInfor() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}
const person = new Person('Huy', 20);
person.displayInfor();
const student = new Student('Huy', 21, '10');
student.displayAllInfor();
