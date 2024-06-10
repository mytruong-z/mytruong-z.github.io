"use strict";
class SavingsAccount extends Account {
    /**
     * Constructor for creating a new SavingsAccount object
     * 
     * @param {number} number the number for this account
     * @param {number} interest the interest rate for this account
     */
    constructor(number, interest) {
        super(number);
        this._interest = interest;
    }

    /**
     * Getter for the 'private' interest field
     * 
     * @returns {number} the interest rate
     */
    getInterest() {
        return this._interest;
    }

    /**
     * Setter for the 'private' interest field
     * 
     * @param {number} interest the interest rate
     */
    setInterest(interest) {
        this._interest = interest;
    }

    addInterest() {
        let interestAmount = this._balance * this._interest / 100;
        this.deposit(interestAmount);
    }

    toString() {
        return "SavingsAccount " + this._number + ": balance " + this._balance + ": interest " + this._interest;
    }

    endOfMonth() {
        this.addInterest();
        return "Interest added SavingsAccount " + this._number + ": balance: " + this._balance + " interest: " + this._interest;
    }
}    