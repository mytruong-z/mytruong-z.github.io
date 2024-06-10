describe("Account", function () {
    let account;
    beforeEach(function () {
        account = new Account(9999);
    });

    it("should return account number", function () {
        assert.equal(account.getNumber(), 9999);
    });

    it("should return account balance", function () {
        assert.equal(account.getBalance(), 0);
    });

    it("should deposit money into the account", function () {
        account.deposit(100);
        assert.equal(account.getBalance(), 100);
    });

    it("should throw an error when deposit amount is less than or equal to zero", function () {
        assert.throws(() => account.deposit(0), RangeError, "Deposit amount has to be greater than zero");
    });

    it("should withdraw money from the account", function () {
        account.deposit(100);
        account.withdraw(50);
        assert.equal(account.getBalance(), 50);
    });

    it("should throw an error when withdraw amount is less than or equal to zero", function () {
        assert.throws(() => account.withdraw(0), RangeError, "Withdraw amount has to be greater than zero");
    });

    it("should throw an error when account has insufficient funds", function () {
        assert.throws(() => account.withdraw(50), Error, "Insufficient funds");
    });

    it("should return account details", function () {
        account.deposit(100);
        assert.equal(account.toString(), "Account 9999: balance 100");
    });
});

describe("SavingsAccount", function () {
    let savingsAccount;
    beforeEach(function () {
        savingsAccount = new SavingsAccount(9999, 10);
    });

    it("should return account number", function () {
        assert.equal(savingsAccount.getNumber(), 9999);
    });

    it("should return account balance", function () {
        assert.equal(savingsAccount.getBalance(), 0);
    });

    it("should return account interest", function () {
        assert.equal(savingsAccount.getInterest(), 10);
    });

    it("should set account interest", function () {
        savingsAccount.setInterest(15);
        assert.equal(savingsAccount.getInterest(), 15);
    });

    it("should deposit money into the account", function () {
        savingsAccount.deposit(100);
        assert.equal(savingsAccount.getBalance(), 100);
    });

    it("should throw an error when deposit amount is less than or equal to zero", function () {
        assert.throws(() => savingsAccount.deposit(0), RangeError, "Deposit amount has to be greater than zero");
    });

    it("should withdraw money from the account", function () {
        savingsAccount.deposit(100);
        savingsAccount.withdraw(50);
        assert.equal(savingsAccount.getBalance(), 50);
    });

    it("should throw an error when withdraw amount is less than or equal to zero", function () {
        assert.throws(() => savingsAccount.withdraw(0), RangeError, "Withdraw amount has to be greater than zero");
    });

    it("should throw an error when account has insufficient funds", function () {
        assert.throws(() => savingsAccount.withdraw(50), Error, "Insufficient funds");
    });

    it("should add interest to the account", function () {
        savingsAccount.deposit(100);
        savingsAccount.addInterest();
        assert.equal(savingsAccount.getBalance(), 110);
    });

    it("should return account details", function () {
        savingsAccount.deposit(100);
        assert.equal(savingsAccount.toString(), "SavingsAccount 9999: balance 100: interest 10");
    });
});


describe("CheckingAccount", function () {
    let checkingAccount;
    beforeEach(function () {
        checkingAccount = new CheckingAccount(9999, 100);
    });

    it("should return account number", function () {
        assert.equal(checkingAccount.getNumber(), 9999);
    });

    it("should return account balance", function () {
        assert.equal(checkingAccount.getBalance(), 0);
    });

    it("should return account overdraft", function () {
        assert.equal(checkingAccount.getOverdraft(), 100);
    });

    it("should set account overdraft", function () {
        checkingAccount.setOverdraft(200);
        assert.equal(checkingAccount.getOverdraft(), 200);
    });

    it("should deposit money into the account", function () {
        checkingAccount.deposit(100);
        assert.equal(checkingAccount.getBalance(), 100);
    });

    it("should throw an error when deposit amount is less than or equal to zero", function () {
        assert.throws(() => checkingAccount.deposit(0), RangeError, "Deposit amount has to be greater than zero");
    });

    it("should withdraw money from the account", function () {
        checkingAccount.deposit(100);
        checkingAccount.withdraw(50);
        assert.equal(checkingAccount.getBalance(), 50);
    });

    it("should throw an error when withdraw amount is less than or equal to zero", function () {
        assert.throws(() => checkingAccount.withdraw(0), RangeError, "Withdraw amount has to be greater than zero");
    });

    it("should throw an error when account has insufficient funds beyond overdraft", function () {
        assert.throws(() => checkingAccount.withdraw(150), Error, "Insufficient funds");
    });

    it("should return account details", function () {
        checkingAccount.deposit(100);
        assert.equal(checkingAccount.toString(), "CheckingAccount 9999: balance 100: overdraft 100");
    });
});

describe("Bank", function () {
    let bank;
    beforeEach(function () {
        bank = new Bank();
    });

    it("should add an account", function () {
        assert.equal(bank.addAccount(), 0);
    });

    it("should add a savings account", function () {
        assert.equal(bank.addSavingsAccount(10), 1);
    });

    it("should add a checking account", function () {
        assert.equal(bank.addCheckingAccount(100), 2);
    });

    it("should close an account", function () {
        bank.addAccount();
        bank.closeAccount(0);
        assert.equal(bank._accounts.length, 1);
    });

    it("should return account report", function () {
        bank.addAccount();
        bank.addSavingsAccount(10);
        bank.addCheckingAccount(100);
        assert.equal(bank.accountReport(), "Account 4: balance 0\nSavingsAccount 5: balance 0: interest 10\nCheckingAccount 6: balance 0: overdraft 100");
    });

    it("should return end of month report", function () {
        bank.addAccount();
        bank.addSavingsAccount(10);
        bank.addCheckingAccount(100);
        
        bank._accounts[0].deposit(100);
        bank._accounts[1].deposit(100);
        bank._accounts[2].deposit(100);
        assert.equal(bank.endOfMonth(), "\nInterest added SavingsAccount 8: balance: 110 interest: 10\n");
    });
});