function Bowling() {

	this.scorecard = 0;
	this.howManyFramesNow = 1;
	this.framepoints = [];

	Bowling.prototype.addPoints = function(number) {
		this.scorecard = this.scorecard + number;
		return this.scorecard;
	};

	Bowling.prototype.addPointsToFrame = function(firstpoint, secondpoint) {
		if ((firstpoint + secondpoint) <= 10) {
			this.howManyFramesNow = this.howManyFramesNow + 1;
			this.addPoints(firstpoint);
			this.addPoints(secondpoint);
			(this.framepoints).push([firstpoint, secondpoint]);
		};
	};

};