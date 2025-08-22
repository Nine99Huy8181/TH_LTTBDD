"use strict";
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
class Libary {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    addUser(user) {
        this.users.push(user);
    }
    getBook() {
        return this.books;
    }
    getUsers() {
        return this.users;
    }
}
