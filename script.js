// generate a random choice
function getComputerChoice() {
    let selection = ['Rock', 'Paper', 'Scissor'];
    let computerchoice = selection[Math.floor(Math.random()*selection.length)];
    return computerchoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(playerSelection);
    let result = ""
    if (playerSelection == 'rock' && computerSelection == 'Paper') {
        result = "You lost! Paper beat Rock";
    }
    else if (playerSelection == 'rock' && computerSelection == 'Scissor') {
        result = "You won! Rock beat Scissor";
    }
    else if (playerSelection == 'paper' && computerSelection == 'Rock') {
        result = "You won! Paper beat Rock";
    }
    else if (playerSelection == 'paper' && computerSelection == 'Scissor') {
        result = "You lost! Scissor bear Paper";
    }
    else if (playerSelection == 'scissor' && computerSelection == 'Rock') {
        result = "You lost! Rock beat Scissor";
    }
    else if (playerSelection == 'scissor' && computerSelection == 'Paper') {
        result = "You won! Scissor beat Paper";
    }
    else {
        result = "Tied";
    }
    return result;
}

function game() {
    
}


let user = prompt("Rock, Paper, or Scissor?");
computer = getComputerChoice();

console.log(playRound(user, computer));