let user = prompt("Rock, Paper, or Scissor?");

// generate a random choice
function getComputerChoice() {
    let selection = ['Rock', 'Paper', 'Scissor'];
    let computerchoice = selection[Math.floor(Math.random()*selection.length)];
    return computerchoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        
    }
}



console.log(getComputerChoice());