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

function game() {
    let user = prompt("Rock, Paper, or Scissor?");
    let computer = getComputerChoice();
    let win = `You won! You beat the Computer. ${scoreboard}`;
    let lose = `You lost! Better luck next time. ${scoreboard}`;
    let tie = `It's a tie!`
    let winner = "";

    for (let i = 0; i < 5; i++) {
        playRound(user,computer);
    }
    
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

let userscore = 0;
let computerscore = 0;
let scoreboard = `\nPlayer: ${userscore} \nComputer: ${computerscore}`;

console.log(game());