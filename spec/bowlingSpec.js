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
			bowling.addPointsToFrame(3,3)
		};
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

	it('can calculate the bonus score when player has rolled a spare', function() {
		bowling.addPointsToFrame(6,4);
		bowling.addPointsToFrame(2,2);
		expect(bowling.scorecard).toEqual(16);
	});

	it('can calculate the bonus score when player has rolled a strike', function() {
		bowling.addPointsToFrame(10,0);
		bowling.addPointsToFrame(7,2);
		expect(bowling.scorecard).toEqual(28);
	});

	it('can calculate the bonus score when player has rolled two strikes in a row', function() {
		bowling.addPointsToFrame(2,4);
		bowling.addPointsToFrame(10,0);
		bowling.addPointsToFrame(10,0);
		bowling.addPointsToFrame(7,2);
		expect(bowling.scorecard).toEqual(61);
	});

	// HERE!!!

	// [[10,0],[10,0],[7,2]]

	// 10 + (10 + 7) = 27
	// 10 + (7 + 2) = 19
	// 7 + 2 = 9
	// 55

	// 10 + 10 + 7
	// 10 + 7 + 2
	// 7 + 2


	// 27 + 19 + 9
	// 46 + 9
	// 55

	it('can calculate the bonus score when player has rolled two strikes in a row', function() {
		bowling.addPointsToFrame(2,4);
		bowling.addPointsToFrame(10,0);
		bowling.addPointsToFrame(10,0);
		bowling.addPointsToFrame(3,4);
		expect(bowling.scorecard).toEqual(53);
	});

	// 10 + (10 + 3) = 23
	// 10 + (3 + 4) = 17
	// 3 + 4 = 7
	// 47

	xit('can calculate the score when a player rolls a perfect game', function() {
		for (var i=1; i<11; i++) {
			bowling.addPointsToFrame(10,0);
		};
		expect(bowling.scorecard).toEqual(300);
	});

});


