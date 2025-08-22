class Account{
    public accountNumber: string;
    private balance: number;
    readonly createdDate: Date;

    constructor(accountNumber: string, initialBalance: number){
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.createdDate = new Date();
    }

    getBalance(): number{
        return this.balance;
    }

    deposit(amount: number): void{
        this.balance += amount;
    }
}