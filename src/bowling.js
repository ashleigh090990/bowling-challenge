function Bowling() {

	this.scorecard = 0;

	Bowling.prototype.addPoints = function(number) {
		this.scorecard = this.scorecard + number
		return this.scorecard
	};

};