class Statement {

    constructor(account) {
        this.account = account
    };

    printStatement() {
        return `date || credit || debit || balance\n
        ${this.account.date()} || ${this.account.deposit()} 
        || ${this.account.withdrawal()} || ${this.account.balance}`;
};

};

module.exports = Statement;