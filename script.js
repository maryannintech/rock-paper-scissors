// score values
let userscore = 0;
let computerscore = 0;

// dom variables
//game screen
const gamescreen = document.querySelector("#game-screen");
//points
let comppoints = document.querySelector(".comp-points");
let playerpoints = document.querySelector(".player-points");
// buttons
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
// commentary
const sayings = document.querySelector("#commentary");
// result
const results = document.querySelector("#results");
//game over screen
const gameover = document.querySelector("#gameoverscreen");
// adding elements to game over screen
const gameoverbtn = document.createElement("button");
gameoverbtn.textContent = "Play Again?";
// event listener for game-over button
gameoverbtn.addEventListener("click", restartGame);
// hiding game over button
gameoverbtn.style.visibility = "hidden";
gameover.appendChild(gameoverbtn);
// eventlisteners
rock.addEventListener("click", () => {
    playRound("rock");
});
paper.addEventListener("click", () => {
    playRound("paper");
});
scissor.addEventListener("click", () => {
    playRound("scissor");
});



// generate a random choice
function getComputerChoice() {
    let selection = ['rock', 'paper', 'scissor'];
    let computerchoice = selection[Math.floor(Math.random()*selection.length)];
    return computerchoice;
}

// to play one round
function playRound(playerSelection) {
    let computerSelection = getComputerChoice();

    if (playerSelection == 'rock' && computerSelection == 'paper') {
        sayings.innerText = "You lost! Paper beat Rock.";
        ++computerscore;   
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissor') {
        sayings.innerText = "You won! Rock beat Scissor.";
        ++userscore;     
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        sayings.innerText = "You won! Paper beat Rock.";
        ++userscore;     
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissor') {
        sayings.innerText = "You lost! Scissor beat Paper.";
        ++computerscore;     
    }
    else if (playerSelection == 'scissor' && computerSelection == 'rock') {
        sayings.innerText = "You lost! Rock beat Scissor.";
        ++computerscore;     
    }
    else if (playerSelection == 'scissor' && computerSelection == 'paper') {
        sayings.innerText = "You won! Scissor beat Paper.";
        ++userscore;     
    }
    else {
        sayings.innerText = `Tie. You both chose ${computerSelection}.`;
    }

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
        restartGame();
    }

    else if (computerscore === 5){
        results.innerText = lose;
        restartGame();
    }

}

// function to hide game screen
function restartGame() {
    gameoverbtn.style.visibility = "visible";
    gamescreen.style.visibility = "hidden";
    gameover.style.visibility = "visible";
    userscore = 0;
    computerscore = 0;
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




