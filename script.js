// score values
let userscore = 0;
let computerscore = 0;

// generate a random choice
function getComputerChoice() {
    let selection = ['rock', 'paper', 'scissor'];
    let computerchoice = selection[Math.floor(Math.random()*selection.length)];
    return computerchoice;
}

// to play one round
function playRound(playerSelection, computerSelection) {
    let result = ""
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        result = `You lost! Paper beat Rock. \nPlayer: ${userscore} \nComputer: ${++computerscore}`;   
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissor') {
        result = `You won! Rock beat Scissor. \nPlayer: ${++userscore} \nComputer: ${computerscore}`;     
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        result = `You won! Paper beat Rock. \nPlayer: ${++userscore} \nComputer: ${computerscore}`;     
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissor') {
        result = `You lost! Scissor beat Paper. \nPlayer: ${userscore} \nComputer: ${++computerscore}`;     
    }
    else if (playerSelection == 'scissor' && computerSelection == 'rock') {
        result = `You lost! Rock beat Scissor. \nPlayer: ${userscore} \nComputer: ${++computerscore}`;     
    }
    else if (playerSelection == 'scissor' && computerSelection == 'paper') {
        result = `You won! Scissor beat Paper. \nPlayer: ${++userscore} \nComputer: ${computerscore}`;     
    }
    else {
        result = `Tie \nPlayer: ${userscore} \nComputer: ${computerscore}`;
    }

    return result;
}

// check who won
function showWinner() {
    let win = `You won! You beat the Computer. \nPlayer: ${userscore} \nComputer: ${computerscore}`;
    let lose = `You lost! Better luck next time. \nPlayer: ${userscore} \nComputer: ${computerscore}`;
    let tie = `It's a tie! \nPlayer: ${userscore} \nComputer: ${computerscore}`;
    let winner = "";

    if (userscore > computerscore) {
        winner = win;
    }
    else if (userscore < computerscore) {
        winner = lose;
    }
    else {
        winner = tie;
    }
    return winner;
}





/*
// start game - 5 rounds
function game() {
    for (let round = 1; round < 6; round++) {
        let user = prompt("Rock, Paper, or Scissor?").toLowerCase();
        let computer = getComputerChoice();
        // display what round it is and what the user and computer chose
        console.log(`----Round (${round})---- \nYou chose ${user} \nThe computer ${computer} \n\n----Results---- \n${playRound(user,computer)}`);
    }

    // display the final winner
    finalwinner = showWinner();
    return finalwinner;
} */

let computer = getComputerChoice();
