abstract class Person{
    protected name: string;
    protected age: number;

    constructor(public na: string, public ag: number){
        this.name = na;
        this.age = ag;
    }

    getName(): string{
        return this.name;
    }
}

class Student extends Person{
    constructor(name: string, age: number, public grade: number) {
        super(name, age)
    }
}

class Teacher extends Person{
        constructor(name: string, age: number, public subject: string) {
        super(name, age)
    }
}



class School {
    private students: Student[] = [];
    private teachers: Teacher[] = [];
    
    addStudent(student: Student): void {
        this.students.push(student);
    }
    
    addTeacher(teacher: Teacher): void {
        this.teachers.push(teacher);
    }
    
    displayInfo(): void {
        this.students.forEach(student => 
            console.log(`- ${student.getName()} (Grade ${student.grade})`));
        this.teachers.forEach(teacher => 
            console.log(`- ${teacher.getName()} (${teacher.subject})`));
    }
}

const school = new School();
school.addStudent(new Student("Alice", 20, 10));
school.addStudent(new Student("Bob", 19, 9));
school.addTeacher(new Teacher("Mr. Johnson", 40, "Science"));
school.addTeacher(new Teacher("Ms. Brown", 35, "English"));
school.displayInfo();

