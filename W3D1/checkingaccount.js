/*
Create a CheckingAccount class by extending Account. In addition to the attributes of an
Account, it should have an overdraft limit variable. The overdraft amount indicates how much
a person is allowed to temporarily withdraw beyond what they have. In other words, it’s the
amount that an account is allowed to go into the red (negative balance). Be sure to set this value
in the constructor and create a getter and a setter for it. Also make sure that you override the
withdraw(amount) method and the toString() method. Test with Mocha / Chai tests.

*/

"use strict";
class CheckingAccount extends Account {
    /**
     * Constructor for creating a new CheckingAccount object
     * 
     * @param {number} number the number for this account
     * @param {number} overdraft the overdraft limit for this account
     */
    constructor(number, overdraft) {
        super(number);
        this._overdraft = overdraft;
    }

    /**
     * Getter for the 'private' overdraft field
     * 
     * @returns {number} the overdraft limit
     */
    getOverdraft() {
        return this._overdraft;
    }

    /**
     * Setter for the 'private' overdraft field
     * 
     * @param {number} overdraft the overdraft limit
     */
    setOverdraft(overdraft) {
        this._overdraft = overdraft;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (this._balance - amount < -this._overdraft) {
            throw new Error("Insufficient funds");
        }
        this._balance -= amount;
    
    }

    toString() {
        return "CheckingAccount " + this._number + ": balance " + this._balance + ": overdraft " + this._overdraft;
    }

    endOfMonth() {
        if (this._balance < 0) {
            return "Warning, low balance CheckingAccount " + this._number + ": balance: " + this._balance + " overdraft: " + this._overdraft;
        }
        return "";
    }

}