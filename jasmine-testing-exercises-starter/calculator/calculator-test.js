it('should calculate the monthly rate correctly', function() {
  // ...
  const values = {
    amount: 40000,
    years: 8,
    rate: 4.2
  };
  expect(calculateMonthlyPayment(values)).toEqual('491.30');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 15081,
    years: 5,
    rate: 17.01
  };
  expect(calculateMonthlyPayment(values)).toEqual('374.88');
});