class Account {

    constructor() {
        this.balance = 0
    };

    deposit(amount) {
        let depositAmount = (this.balance += amount);
        return depositAmount;
    };

    withdrawal(amount) {
        let withdrawalAmount = (this.balance -= amount);
        return withdrawalAmount;
    };

    date() {
        const today = new Date();
        return (today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear())
    };

};

module.exports = Account;