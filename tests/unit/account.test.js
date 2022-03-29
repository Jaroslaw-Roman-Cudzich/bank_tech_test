describe('Account', () => {

    describe('deposit', () => {
        it('adds an amount to the balance of the account', () => {
        expect(deposit(2000, 1000).toBe(3000));
      });
  });

});

