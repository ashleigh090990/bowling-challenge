function Bowling() {

	var maximumFrames = 10;
	this.scorecard = 0;
	this.howManyPointsRecorded = 0;
	this.framepoints = [];

	Bowling.prototype.addPointsToScorecard = function(number) {
		this.scorecard = this.scorecard + number;
		this.scorecard;
	};

	Bowling.prototype.moveToNextFrame = function() {
		this.howManyPointsRecorded = this.howManyPointsRecorded + 1;
	};

	Bowling.prototype.pushPointToFrame = function(point) {
		(this.framepoints).push(point);
		this.moveToNextFrame();
	};

	Bowling.prototype.addPointsToFrame = function(point) {
		if ((point > 10) || ((this.howManyPointsRecorded > 1) && (this.isThisSetTenOrLess() === false))) {
			this.addPointsToScorecard(0);
		} else if ((point === 10) && (this.ifFirstPointInSet() === true)) {
			this.pushPointToFrame(point);
			this.addPointsToScorecard(point);
			this.addZeroAfterStrike();
		} else {
			this.pushPointToFrame(point);
			this.addPointsToScorecard(point);
		};
		if (this.previousSetIsSpare() === true) {
			this.addPointsToScorecard(point);
		};
	};

	Bowling.prototype.addZeroAfterStrike = function() {
			this.pushPointToFrame(0);
	};

	Bowling.prototype.ifFirstPointInSet = function(point) {
		return (this.howManyPointsRecorded % 2 === 0);
	};

	Bowling.prototype.isThisSetTenOrLess = function(point) {
		if (this.howManyPointsRecorded = 1) {
			return true			
		} else {
			return (point <= 10);
			var firstPointIndex = this.framepoints.length - 1;
			var sumOfSet = this.framepoints[firstPointIndex] + point;
			return (sumOfSet <= 10);
		};
	};

	Bowling.prototype.previousSetIsSpare = function() {
		if ((this.howManyPointsRecorded >= 2) && (this.ifFirstPointInSet())) {
			var previousFrameIndex = (this.framepoints).length-2;
			var frameBeforePreviousIndex = previousFrameIndex - 1;
			var previousFrame = this.framepoints[previousFrameIndex];
			var frameBeforePrevious = this.framepoints[frameBeforePreviousIndex];
			return ((frameBeforePrevious < 10) && (frameBeforePrevious + previousFrame === 10));
		};
	};



		// if ((this.howManyPointsRecorded > 1) && (this.conditionForStrike()) && (this.framepoints.length < maximumFrames)) {
		// 	this.bonusScoreForStrike(firstpoint, secondpoint);
		// };
		// if ((this.howManyPointsRecorded > 1) && (this.conditionForSpare()) && (this.conditionForStrike() === false) && (this.framepoints.length < maximumFrames)) {
		// 	this.addPointsToScorecard(firstpoint);
		// };
		// if ((firstpoint < 10) && (this.isMoreThanTen(firstpoint, secondpoint)) && (this.framepoints.length < maximumFrames)) {
		// 	this.addPointsToScorecard(firstpoint);
		// };
		// if ((this.isTenOrLess(firstpoint, secondpoint)) && (this.framepoints.length < maximumFrames)) {
		// 	this.noBonusScoreToAdd(firstpoint,secondpoint);
		// };
		// if ((this.framepoints.length === maximumFrames) && (this.conditionForStrike() === true)) {
		// 	if (this.framepoints.length === maximumFrames) {
		// 		(this.framepoints).push([firstpoint, secondpoint]);
		// 	};
		// };








	Bowling.prototype.satisfiesConditionForStrike = function() {
		var previousFrame = this.howManyPointsRecorded - 1;
		return (this.framepoints[previousFrame] === 10);
	};








	Bowling.prototype.noBonusScoreToAdd = function(point) {
		this.addFirstAndSecondPoints(point);
		this.moveToNextFrame();
		(this.framepoints).push([point]);
	};

	Bowling.prototype.addFirstAndSecondPoints = function(point) {
		this.addPointsToScorecard(point);
	};

	Bowling.prototype.bonusScoreForStrike = function(point) {
		var currentFrameIndex = (this.framepoints).length;
		var frameBeforeCurrent = this.framepoints[currentFrameIndex-1];
		var frameBeforePrevious = this.framepoints[currentFrameIndex-2]
		if ((this.howManyFramesNow > 2) && (frameBeforeCurrent[1] === 0) && (frameBeforePrevious[1] === 0)) {
			this.addFirstAndSecondPoints(point);
			this.addPointsToScorecard(point);
		} else {
			this.addFirstAndSecondPoints(point);
		};
	};

	Bowling.prototype.sumOfFrame = function(point) {
		var number = point;
	};

	Bowling.prototype.isTenOrLess = function(point) {
		return (point) <= 10;
	};

	Bowling.prototype.isMoreThanTen = function(point) {
		if (this.isTenOrLess(point) === false) {
			return true;
		};
	};

};