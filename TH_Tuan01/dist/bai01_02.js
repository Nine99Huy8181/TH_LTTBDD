"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfor() {
        console.log(`Name: ${this.name}, Age ${this.age}`);
    }
}
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
