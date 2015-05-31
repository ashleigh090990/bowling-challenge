describe('Bowling', function() {

	var bowling;

	beforeEach(function() {
		bowling = new Bowling();
	});

	it('starts the game with 0 points', function() {
		expect(bowling.scorecard).toEqual(0);
	});

	it('can add points to scorecard when they play', function() {
		bowling.addPointsToScorecard(5);
		expect(bowling.scorecard).toEqual(5);
	});

	it('will start at frame one', function() {
		expect(bowling.howManyFramesNow).toEqual(1);
	});

	it('will only let player input scores for ten frames', function() {
		for (var i=1; i<10; i++) {
		bowling.addPointsToFrame(3,3)};
		expect(bowling.howManyFramesNow).toEqual(10);
	});


	it('player can add two sets of points per frame', function() {
		expect(bowling.framepoints).toEqual([]);
		bowling.addPointsToFrame(4,3);
		expect(bowling.scorecard).toEqual(7);
		expect(bowling.framepoints).toEqual([[4,3]]);
		bowling.addPointsToFrame(6,3);
		expect(bowling.framepoints).toEqual([[4,3],[6,3]]);
		expect(bowling.scorecard).toEqual(16);
	});

	it('player can only add one set of points if they\'ve bowled a strike', function() {
		bowling.addPointsToFrame(10,2);
		expect(bowling.howManyFramesNow).toEqual(1);
		expect(bowling.scorecard).toEqual(0);
	});

	it('can only add between 0 and 10 points per frame', function(){
		bowling.addPointsToFrame(7,7);
		expect(bowling.howManyFramesNow).toEqual(1);
		expect(bowling.scorecard).toEqual(7);
	});

	it('can calculate the bonus score when player has rolled a spare', function() {
		bowling.addPointsToFrame(6,4);
		bowling.addPointsToFrame(7,2);
		expect(bowling.scorecard).toEqual(26);
	});

});


