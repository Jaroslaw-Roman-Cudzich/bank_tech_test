const Statement = require('../../statement')
const Account = require('../../account')

describe('Statement', () => {

    describe('printStatement', () => {
        it('displays the bank statement', () => {
        const account = new Account();
        const statement = new Statement(account);
        account.deposit(2000.00);
        expect(statement.printStatement()).toEqual("date || credit || debit || balance\n31/3/2022 || 2000.00 || || 2000.00");
        
      });
  });

})