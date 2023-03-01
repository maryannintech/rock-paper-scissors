// score values
let userscore = 0;
let computerscore = 0;

// dom variables
//points
const comppoints = document.querySelector(".comp-points");
const playerpoints = document.querySelector(".player-points");
// buttons
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
// result
const results = document.querySelector("#results");


// generate a random choice
function getComputerChoice() {
    let selection = ['rock', 'paper', 'scissor'];
    let computerchoice = selection[Math.floor(Math.random()*selection.length)];
    return computerchoice;
}

// to play one round
function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
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

    console.log(computerSelection);
    showWinner();

}


// check and show who won 
function showWinner() {
    let win = "You won! You beat the Computer.";
    let lose = "You lost! Better luck next time.";
    playerpoints.textContent = userscore;
    comppoints.textContent = computerscore;

    if (userscore === 5) {
        results.innerText = win;
    }

    else if (computerscore === 5){
        results.innerText = lose;
    }
}

// eventlisteners
rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissor.addEventListener("click", playRound);

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




