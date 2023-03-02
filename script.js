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
gameoverbtn.addEventListener("click", clickPlaybtn);
// hiding game over button
gameoverbtn.style.visibility = "hidden";
gameover.appendChild(gameoverbtn);

// eventlisteners for buttons
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

// play the game
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
    let win = "You beat the Computer! \nCongratulations.";
    let lose = "The Computer won! \nBetter luck next time.";
    playerpoints.textContent = userscore;
    comppoints.textContent = computerscore;

    if (userscore === 5) {
        results.innerText = win;
        gameoverbtn.style.visibility = "visible";
        // prevent player from clicking the buttons again
        rock.disabled = true;
        paper.disabled = true;
        scissor.disabled = true;
    }

    else if (computerscore === 5){
        results.innerText = lose;
        gameoverbtn.style.visibility = "visible";
        // prevent player from clicking the buttons again
        rock.disabled = true;
        paper.disabled = true;
        scissor.disabled = true;
    }
    

}

// function to play again
function clickPlaybtn() {
    // restart game
    window.location.reload();
}





