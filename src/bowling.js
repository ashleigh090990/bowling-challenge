function Bowling() {

	this.scorecard = 0;
	this.howManyFramesNow = 1;
	this.framepoints = [];

	Bowling.prototype.addPointsToScorecard = function(number) {
		this.scorecard = this.scorecard + number;
		return this.scorecard;
	};

	Bowling.prototype.moveToNextFrame = function() {
		this.howManyFramesNow = this.howManyFramesNow + 1;
	};

	Bowling.prototype.addPointsToFrame = function(firstpoint, secondpoint) {
		if ((this.isAfterFirstFrame()) && (this.satisfiesConditionForStrike())) {
			this.bonusScoreForStrike(firstpoint, secondpoint);
		};
		if ((this.isAfterFirstFrame()) && (this.satisfiesConditionForSpare())) {
			this.addPointsToScorecard(firstpoint);
		};
		if ((firstpoint < 10) && (this.isMoreThanTen(firstpoint, secondpoint))) {
			this.addPointsToScorecard(firstpoint);
		};
		if (this.isTenOrLess(firstpoint, secondpoint)) {
			this.justAddPoints(firstpoint,secondpoint);
		};
	};

	Bowling.prototype.isAfterFirstFrame = function() {
		(this.howManyFramesNow > 1);
	};

	Bowling.prototype.justAddPoints = function(firstpoint,secondpoint) {
		this.sumOfFirstAndSecondPoints(firstpoint, secondpoint);
		this.moveToNextFrame();
		(this.framepoints).push([firstpoint, secondpoint]);
	};

	Bowling.prototype.sumOfFirstAndSecondPoints = function(firstpoint, secondpoint) {
		this.addPointsToScorecard(firstpoint);
		this.addPointsToScorecard(secondpoint);
	};

	Bowling.prototype.wasFrameBeforePreviousAStrike = function() {
		var currentFrameIndex = (this.framepoints).length-1;
		var previousFrame = this.framepoints[currentFrameIndex-1];
		var frameBeforePrevious = this.framepoints[previousFrame-2];
		((frameBeforeCurrent[1] === 0) && (frameBeforePrevious[1] === 0));
	};

	Bowling.prototype.satisfiesConditionForStrike = function() {
		var currentFrameIndexX = (this.framepoints).length -1;
		var previousFrameX = this.framepoints[currentFrameIndexX-1];
		(previousFrameX[1] === 0);
	};

	Bowling.prototype.bonusScoreForStrike = function(firstpoint, secondpoint) {
		if ((this.howManyFramesNow > 2) && (this.wasFrameBeforePreviousAStrike())) {
			this.sumOfFirstAndSecondPoints(firstpoint, secondpoint);
			this.addPointsToScorecard(firstpoint);
		} else {
			this.sumOfFirstAndSecondPoints(firstpoint, secondpoint);
		};
	};

	Bowling.prototype.satisfiesConditionForSpare = function() {
		var previousFrameIndex = (this.framepoints).length -2;
		var previousFrame = this.framepoints[previousFrameIndex];
		var sumOfPreviousFrame = previousFrame[0] + previousFrame[1];
		((sumOfPreviousFrame === 10) && (this.satisfiesConditionForStrike() === false));
	};

	Bowling.prototype.sumOfFrame = function(firstpoint, secondpoint) {
		var number = firstpoint + secondpoint;
	};

	Bowling.prototype.isTenOrLess = function(firstpoint, secondpoint) {
		return (firstpoint + secondpoint) <= 10;
	};

	Bowling.prototype.isMoreThanTen = function(firstpoint, secondpoint) {
		if (this.isTenOrLess(firstpoint, secondpoint) === false) {
			return true;
		};
	};

};