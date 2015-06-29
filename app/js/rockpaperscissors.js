////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Assignment Joseph Greene WDI     */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return /* Your Expression */;

    if (move === true) {

    }
    else {
    	move = getInput();

    return move;
    }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return /* Your Expression */;

    if (move === true) {

    }
    else {
    	move = randomPlay();
    }

    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */

    if ((playerMove === 'rock' && computerMove === 'paper') ||
    	(playerMove === 'paper' && computerMove === 'scissors') ||
    	(playerMove === 'scissors' && computerMove === 'rock')) {
    	winner = 'computer';
}

    else if ((playerMove === 'rock' && computerMove === ' scissors') ||
    		 (playerMove === 'paper' && computerMove === 'rock') ||
    	     (playerMove === 'scissors' && computerMove === 'paper')) {
    		winner = 'player';
    }

    else if (playerMove === computerMove) {
    		winner = 'tie';
    }

    console.log ("Bruh, You have" + playerMove + "Opponent has" + computerMove + "Victory is awarded to the");
    
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors Bruh");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */

    var score;

    while (playerWins < 5 && computerWins < 5) {
    	score = getWinner(getPlayerMove(), getComputerMove());
	
	if (score === 'player') {
		playerWins ++
		console.log('Bruh!')
	}

	else if (score === 'computer') {
		computerWins ++
		console.log ('Computer!');
	}

	else {
		console.log('tie');
	}
    
    console.log ("Score Count is" + playerWins + "to" + computerWins);
}
    return [playerWins, computerWins];
}

