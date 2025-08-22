class Book {
    constructor(public title: string, public author: string) {}
}

class User {
    constructor(public name: string, public id: number) {}
}

class Libary{
    private books: Book[] = [];
    private users: User[] = [];

    addBook(book: Book){
        this.books.push(book);
    }

    addUser(user: User){
        this.users.push(user);
    }

    getBook(): Book[]{
        return this.books;
    }

        getUsers(): User[] {
        return this.users;
    }
}