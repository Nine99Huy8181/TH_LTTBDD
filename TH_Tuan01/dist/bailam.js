"use strict";
//05
class BankAccount {
    constructor(balance = 0) {
        this.balance = balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: ${amount}, New balance: ${this.balance}`);
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
        }
        else {
            console.log("Invalid");
        }
    }
    getBalance() {
        return this.balance;
    }
}
const account = new BankAccount(5000000);
console.log(account.deposit(1000));
console.log(account.withdraw(2000));
console.log(account.getBalance());
//06
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
//07
class User {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        if (name.length > 0) {
            this._name = name;
        }
    }
}
const user = new User('Huy');
console.log(user.name);
user.name = 'Khoa';
console.log(user.name);
