class Stack<T> {
    private items: T[] = [];
    
    push(item: T): void {
        this.items.push(item);
    }
    
    pop(): T | undefined {
        return this.items.pop();
    }
    
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }
    
    isEmpty(): boolean {
        return this.items.length === 0;
    }
    
    size(): number {
        return this.items.length;
    }
}

import { Person } from "./bai01_02";
const persons = new Stack<Person>();

persons.push(new Person('Huy', 10));
persons.push(new Person('Khoa', 30));
persons.push(new Person('Hoang', 20));

console.log('Pop: ', persons.pop());
console.log('Empty: ', persons.isEmpty());
console.log('Size: ', persons.size());
console.log('Peek: ', persons.peek());

