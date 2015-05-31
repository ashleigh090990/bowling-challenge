function Bowling() {

	this.scorecard = 0;
	this.howManyFramesNow = 1;
	this.framepoints = [];

	Bowling.prototype.addPointsToScorecard = function(number) {
		this.scorecard = this.scorecard + number;
		return this.scorecard;
	};

	Bowling.prototype.addPointsToFrame = function(firstpoint, secondpoint) {
		if ((this.howManyFramesNow > 1) && (this.bonusScoreForSpare())) {
			this.addPointsToScorecard(firstpoint);
		};
		if ((firstpoint < 10) && (this.isMoreThanTen(firstpoint, secondpoint))) {
			this.addPointsToScorecard(firstpoint);
		};
		if (this.isTenOrLess(firstpoint, secondpoint)) {
			this.addPointsToScorecard(firstpoint);
			this.addPointsToScorecard(secondpoint);
			this.moveToNextFrame();
			(this.framepoints).push([firstpoint, secondpoint]);
		};
	};

	Bowling.prototype.moveToNextFrame = function() {
		this.howManyFramesNow = this.howManyFramesNow + 1;
	};

	Bowling.prototype.bonusScoreForSpare = function() {
		var frameBeforeCurrentIndex = (this.framepoints).length -1;
		var frameBeforeCurrent = this.framepoints[frameBeforeCurrentIndex];
		var sumOfEachFrame = 0
		for (var i=0; i<2; ++i) {
			sumOfEachFrame += frameBeforeCurrent[i];
		};	
		return (sumOfEachFrame === 10);
	};

	// Bowling.prototype.sumOfEachFrame = function(firstpoint, secondpoint) {
	// 	var number = firstpoint + secondpoint;
	// };

	Bowling.prototype.isTenOrLess = function(firstpoint, secondpoint) {
		return (firstpoint + secondpoint) <= 10;
	};

	Bowling.prototype.isMoreThanTen = function(firstpoint, secondpoint) {
		if (this.isTenOrLess(firstpoint, secondpoint) === false) {
			return true;
		};
	};

};