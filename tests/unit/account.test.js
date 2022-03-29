const Account = require('../../account.js');

describe('Account', () => {

    describe('deposit', () => {
        it('adds an amount to the balance of the account', () => {
        const account = new Account
        expect(account.deposit(2000)).toEqual(2000);
      });
  });

    describe('withdrawal', () => {
      it('subtracts an amount from the balance of the account', () => {
      const account = new Account();
      expect(account.withdrawal(2000)).toEqual(-2000);
    });
  });

    describe('date', () => {
      it('shows the date of the transaction in a day/month/year format', () => {
      const account = new Account();
      account.deposit(2000);
      const today = new Date();
      expect(account.date()).toEqual("29/3/2022");
    });
  });

});

