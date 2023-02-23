let userscore = 0;
let computerscore = 0;


// generate a random choice
function getComputerChoice() {
    let selection = ['rock', 'paper', 'scissor'];
    let computerchoice = selection[Math.floor(Math.random()*selection.length)];
    return computerchoice;
}

// d
function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    let result = ""
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        result = `You lost! Paper beat Rock \nPlayer: ${userscore} \nComputer: ${++computerscore}`;   
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissor') {
        result = `You won! Rock beat Scissor \nPlayer: ${++userscore} \nComputer: ${computerscore}`;     
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        result = `You won! Paper beat Rock \nPlayer: ${++userscore} \nComputer: ${computerscore}`;     
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissor') {
        result = `You lost! Scissor beat Paper \nPlayer: ${userscore} \nComputer: ${++computerscore}`;     
    }
    else if (playerSelection == 'scissor' && computerSelection == 'rock') {
        result = `You lost! Rock beat Scissor \nPlayer: ${userscore} \nComputer: ${++computerscore}`;     
    }
    else if (playerSelection == 'scissor' && computerSelection == 'paper') {
        result = `You won! Scissor beat Paper \nPlayer: ${++userscore} \nComputer: ${computerscore}`;     
    }
    else {
        result = `Tie\n Player: ${userscore} \nComputer: ${computerscore}`;
    }
    return result;
}

function checkWinner() {
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

function game() {
    for (i = 0; i < 5; i++) {
        let user = prompt("Rock, Paper, or Scissor?");
        let computer = getComputerChoice();
        playRound(user,computer);
    }

    finalwinner = checkWinner();
    return finalwinner;
}

console.log(game());