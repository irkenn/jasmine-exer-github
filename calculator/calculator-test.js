
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 123456,
    years: 7,
    rate: 9
  }
  expect(calculateMonthlyPayments(values)).toEqual(1986.29);
});

it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 96096,
    years : 3,
    rate: 7.55
  }
  expect(calculateMonthlyPayments(values)).toEqual(2991.39);
});

it("should return a result with 2 decimal places", function() {
  const values = {
    amount : 66676,
    years : 69,
    rate : 9
  }
  expect(calculateMonthlyPayments(values)).toEqual(501.10); 
});

it("should return a result with 2 decimal places", function() {
  const values = {
    amount : 30001,
    years : 7,
    rate : 5.8
    }
  expect(calculateMonthlyPayments(values)).toEqual(435.40);
});
/// etc
