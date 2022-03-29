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

    date() {
        const today = new Date();
        return (today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear())
    };

};





module.exports = Account;