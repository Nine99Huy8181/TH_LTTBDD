//05
class BankAccount{
    constructor(private balance: number = 0){}

    deposit(amount: number): void{
        if(amount > 0){
            this.balance += amount;
            console.log(`Deposited: ${amount}, New balance: ${this.balance}`);
        }
    }

     withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Invalid");
        }
    }
    
    getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount(5000000);
console.log(account.deposit(1000));
console.log(account.withdraw(2000));
console.log(account.getBalance());


//06
// class Book{
//     constructor(public title: string,public author: string,public year: number){}
// }

//07
// class User{
//     private _name: string;
//     constructor(name: string){
//         this._name = name;
//     }

//     get name(): string{
//         return this._name
//     }

//     set name(name: string){
//         if(name.length > 0){
//             this._name = name;
//         }
//     }
// }

// const user = new User('Huy');
// console.log(user.name);
// user.name = 'Khoa'
// console.log(user.name);




