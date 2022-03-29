class Account {

    constructor(balance) {
        this.balance = 0
    };

    deposit(amount) {
        return (this.balance += amount);
    };

    withdrawal(amount) {
        return (this.balance -= amount);
    };

};





module.exports = Account;