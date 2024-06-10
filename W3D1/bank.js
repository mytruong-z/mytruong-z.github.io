"use strict";
/*
Next create a Bank class, a Bank object should have an array of Account objects, and have
addAccount(), addSavingsAccount(interest),
addCheckingAccount(overdraft) methods each of which returns the number of the
created account. Also add a closeAccount(number) method that closes (removes from
the array) the account with that number, and a accountReport() method that returns a 
String with each account on its own line. Use a static nextNumber variable on the Bank class
to know what the number for the next account will be. Create Mocha / Chai tests to ensure that
everything is working.
*/

class Bank {
    static nextNumber = 0;
    constructor() {
        this._accounts = [];
    }

    addAccount() {
        let account = new Account(Bank.nextNumber);
        this._accounts.push(account);
        Bank.nextNumber++;
        return account.getNumber();
    }

    addSavingsAccount(interest) {
        let savingsAccount = new SavingsAccount(Bank.nextNumber, interest);
        this._accounts.push(savingsAccount);
        Bank.nextNumber++;
        return savingsAccount.getNumber();
    }

    addCheckingAccount(overdraft) {
        let checkingAccount = new CheckingAccount(Bank.nextNumber, overdraft);
        this._accounts.push(checkingAccount);
        Bank.nextNumber++;
        return checkingAccount.getNumber();
    }

    closeAccount(number) {
        this._accounts = this._accounts.filter(account => account.getNumber() !== number);
    }

    accountReport() {
        return this._accounts.map(account => account.toString()).join("\n");
    }

    endOfMonth() {
        return this._accounts.map(account => account.endOfMonth()).join("\n");
    }
}