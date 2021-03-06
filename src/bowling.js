function Bowling() {

	this.scorecard = 0;
	this.howManyFramesNow = 1;
	this.framepoints = [];

	Bowling.prototype.addPointsToScorecard = function(number) {
		this.scorecard = this.scorecard + number;
		return this.scorecard;
	};

	Bowling.prototype.addPointsToFrame = function(firstpoint, secondpoint) {
		if ((this.howManyFramesNow > 1) && (this.conditionForStrike())) {
			this.bonusScoreForStrike(firstpoint, secondpoint);
		};
		if ((this.howManyFramesNow > 1) && (this.conditionForSpare()) && (this.conditionForStrike() === false)) {
			this.addPointsToScorecard(firstpoint);
		};
		if ((firstpoint < 10) && (this.isMoreThanTen(firstpoint, secondpoint))) {
			this.addPointsToScorecard(firstpoint);
		};
		if (this.isTenOrLess(firstpoint, secondpoint)) {
			this.noBonusScoreToAdd(firstpoint,secondpoint);
		};
	};

	Bowling.prototype.noBonusScoreToAdd = function(firstpoint,secondpoint) {
		this.addPointsToScorecard(firstpoint);
		this.addPointsToScorecard(secondpoint);
		this.moveToNextFrame();
		(this.framepoints).push([firstpoint, secondpoint]);
	};

	Bowling.prototype.bonusScoreForStrike = function(firstpoint, secondpoint) {
		var currentFrameIndex = (this.framepoints).length;
		var frameBeforeCurrent = this.framepoints[currentFrameIndex-1];
		this.addPointsToScorecard(firstpoint);
		this.addPointsToScorecard(secondpoint);
		if (currentFrameIndex[1] === 0) {
			this.addPointsToScorecard(firstpoint);
		};

		// if ((frameBeforeCurrent[0]===10)) {
		// 	this.addPointsToScorecard(firstpoint);
		// 	this.noBonusScoreToAdd(firstpoint, secondpoint);
		// } else {
		// 	this.addPointsToScorecard(firstpoint);
		// };


// if frameBeforeCurrent[1] === 0
// 	then add currentFrame[0]
// else
// 	var sumOfFrame = firstpoint + secondpoint
// 	add the next two addPointsToScorecard(sumOfFrame)

	};

	Bowling.prototype.moveToNextFrame = function() {
		this.howManyFramesNow = this.howManyFramesNow + 1;
	};

	Bowling.prototype.conditionForStrike = function() {
		var frameBeforeCurrentIndex = (this.framepoints).length -1;
		var frameBeforeCurrent = this.framepoints[frameBeforeCurrentIndex];
		return (frameBeforeCurrent[0] === 10);
	};

	Bowling.prototype.conditionForSpare = function() {
		var frameBeforeCurrentIndex = (this.framepoints).length -1;
		var frameBeforeCurrent = this.framepoints[frameBeforeCurrentIndex];
		var sumOfEachFrame = 0;
		for (var i=0; i<2; ++i) {
			sumOfEachFrame += frameBeforeCurrent[i];
		};	
		return (sumOfEachFrame === 10);
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