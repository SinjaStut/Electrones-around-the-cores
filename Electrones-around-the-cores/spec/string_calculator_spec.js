describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	it('should return 6 for array [ 1, 2, 3, 4, 5 ]', function() {
		expect(calculator.add([ 1, 2, 3, 4, 5 ])).toEqual(6);
	});
});
