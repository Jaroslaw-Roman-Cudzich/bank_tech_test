const Account = require('../../account.js');

describe('Account', () => {

    describe('deposit', () => {
        it('adds an amount to the balance of the account', () => {
        const account = new Account
        expect(account.deposit(2000)).toEqual(2000);
      });
  });

});

