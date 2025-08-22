"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
}
const bai01_02_1 = require("./bai01_02");
const persons = new Stack();
persons.push(new bai01_02_1.Person('Huy', 10));
persons.push(new bai01_02_1.Person('Khoa', 30));
persons.push(new bai01_02_1.Person('Hoang', 20));
console.log('Pop: ', persons.pop());
console.log('Empty: ', persons.isEmpty());
console.log('Size: ', persons.size());
console.log('Peek: ', persons.peek());
