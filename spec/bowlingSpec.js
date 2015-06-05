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

	it('will start with 0 points recorded on the scorecard', function() {
		expect(bowling.howManyPointsRecorded).toEqual(0);
	});

// This test was for old method that took two arguments
	xit('player can add two sets of points per frame', function() {
		expect(bowling.framepoints).toEqual([]);
		bowling.addPointsToFrame(4,3);
		expect(bowling.scorecard).toEqual(7);
		expect(bowling.framepoints).toEqual([[4,3]]);
		bowling.addPointsToFrame(6,3);
		expect(bowling.framepoints).toEqual([[4,3],[6,3]]);
		expect(bowling.scorecard).toEqual(16);
	});

	it('zero is automatically added to the framepoints if player has bowled a strike', function() {
		bowling.addPointsToFrame(10);
		expect(bowling.howManyPointsRecorded).toEqual(2);
		expect(bowling.scorecard).toEqual(10);
		expect(bowling.framepoints).toEqual([10,0]);
	});

	it('will only let player input between 0 and 10 points', function(){
		bowling.addPointsToFrame(14);
		expect(bowling.howManyPointsRecorded).toEqual(0);
		expect(bowling.scorecard).toEqual(0);
	});

	it('will only let player input up to 10 points overall for each pair of points', function() {
		bowling.addPointsToFrame(5);
		bowling.addPointsToFrame(6);
		expect(bowling.howManyPointsRecorded).toEqual(1);
		expect(bowling.scorecard).toEqual(5);
		expect(bowling.framepoints).toEqual([5]);
	});








	xit('can calculate the bonus score when player has rolled a spare', function() {
		bowling.addPointsToFrame(6);
		bowling.addPointsToFrame(4);
		bowling.addPointsToFrame(7);
		bowling.addPointsToFrame(2);
		expect(bowling.scorecard).toEqual(26);
	});

	xit('can calculate the bonus score when player has rolled a spare', function() {
		bowling.addPointsToFrame(6,4);
		bowling.addPointsToFrame(2,2);
		expect(bowling.scorecard).toEqual(16);
	});

	xit('can calculate the bonus score when player has rolled a strike', function() {
		bowling.addPointsToFrame(2,4);
		bowling.addPointsToFrame(10,0);
		bowling.addPointsToFrame(7,2);
		expect(bowling.scorecard).toEqual(34);
	});

	xit('can calculate the bonus score when player has rolled two strikes in a row', function() {
		bowling.addPointsToFrame(2,4);
		bowling.addPointsToFrame(10,0);
		bowling.addPointsToFrame(10,0);
		bowling.addPointsToFrame(7,2);
		expect(bowling.scorecard).toEqual(61);
	});

	xit('can calculate the bonus score when player has rolled two strikes in a row', function() {
		bowling.addPointsToFrame(2,4);
		bowling.addPointsToFrame(10,0);
		bowling.addPointsToFrame(10,0);
		bowling.addPointsToFrame(3,4);
		expect(bowling.scorecard).toEqual(53);
	});

	xit('can calculate the bonus score when player has rolled three strikes in a row', function() {
		bowling.addPointsToFrame(2,4);
		bowling.addPointsToFrame(10,0);
		bowling.addPointsToFrame(10,0);
		bowling.addPointsToFrame(10,0);		
		bowling.addPointsToFrame(3,4);
		expect(bowling.scorecard).toEqual(83);
	});

	xit('only lets player input scores for ten frames', function() {
		for (var i=1; i<11; i++) {
			bowling.addPointsToFrame(1,1);
		};
		expect(bowling.addPointsToFrame(2,2));
		expect(bowling.framepoints.length).toEqual(10);
	});

	xit('on the tenth frame, when a player rolls a strike, they can roll one more time again', function() {
		for (var i=1; i<10; i++) {
			bowling.addPointsToFrame(1,1);
		};
		bowling.addPointsToFrame(10,0);
		bowling.addPointsToFrame(1,0);
		expect(bowling.framepoints).toEqual([[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[10,0],[1,0]]);
		expect(bowling.scorecard).toEqual(30);
	});

	xit('can calculate the score when a player rolls a perfect game', function() {
		for (var i=1; i<10; i++) {
			bowling.addPointsToFrame(10,0)
		};
		expect(bowling.scorecard).toEqual(290);
	});

});