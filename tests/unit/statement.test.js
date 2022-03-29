const Statement = require('../../statement')
const Account = require('../../account')

describe('Statement', () => {

    describe('printStatement', () => {
        it('displays the bank statement', () => {
        const account = new Account();
        // console.log(account);
        const statement = new Statement(account);
        // console.log(statement);
        account.deposit(2000.00);
        // console.log(statement.account.balance);
        // console.log(statement.account.deposit())
        expect(statement.printStatement()).toEqual("date || credit || debit || balance\n29/3/2022 || 2000.00 || || 2000.00");
        
      });
  });

})