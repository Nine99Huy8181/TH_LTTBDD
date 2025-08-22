"use strict";
class Person {
    constructor(na, ag) {
        this.na = na;
        this.ag = ag;
        this.name = na;
        this.age = ag;
    }
    getName() {
        return this.name;
    }
}
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
}
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
}
class School {
    constructor() {
        this.students = [];
        this.teachers = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }
    displayInfo() {
        this.students.forEach(student => console.log(`- ${student.getName()} (Grade ${student.grade})`));
        this.teachers.forEach(teacher => console.log(`- ${teacher.getName()} (${teacher.subject})`));
    }
}
const school = new School();
school.addStudent(new Student("Alice", 20, 10));
school.addStudent(new Student("Bob", 19, 9));
school.addTeacher(new Teacher("Mr. Johnson", 40, "Science"));
school.addTeacher(new Teacher("Ms. Brown", 35, "English"));
school.displayInfo();
