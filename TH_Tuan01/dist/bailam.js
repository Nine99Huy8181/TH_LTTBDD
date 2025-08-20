"use strict";
//04
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
