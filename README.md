Bowling Challenge
=================

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

### Optional Extra

Create a nice interactive animated interface with jQuery.



The Rules of Bowling:
--------------------

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

## Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

## Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

## 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

## Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

## Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.



User Stories
------------

As a Fred Flintstone wannabe,
So that I can be like my stone age idol,
I would like to be able to bowl for ten frames.

As a Fred Flintstone wannabe,
So that I can play a proper game,
I would like to be able to input the number of pins hit as between 0 and 10.

As a Fred Flintstone wannabe,
So that I can keep track of my bowling game,
I would like to be able to add my points to a scorecard.

As a Fred Flintstone wannabe,
So that I can improve on my score,
I would like to have bonus points added to my score if I've bowled a spare or a strike.

As a Fred Flintstone wannabe,
So that I can keep track of my bowling game,
I would like to be able to see all of my points and my overall score.

As a Fred Flintstone equivalent,
So that I can 
I would like to see that I have 300 points.



Testing
=======

This will be tested with Jasmine.

Feature Tests
-------------

* Player starts game

	* Player inputs their name

	* Player has ten frames to add their score into

* Player bowls and for each of their turns

	* They can add points to their scorecard

	* They can see their overall score

	* Bonus points are added if they've bowled a spare

	* Bonus points are added if they've bowled a strike