describe('Bowling', function() {

	var bowling = new Bowling();

	it('can add points to scorecard when they play', function() {
		expect(bowling.scorecard).toEqual(0);
		bowling.addPoints(5);
		expect(bowling.scorecard).toEqual(5);
	});

});