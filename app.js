function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper"
    } else if (randomNumber === 3) {
        return "scissors"
    }
}

const computerSelection = getComputerChoice();
const playerSelection = prompt("rock, paper or scissors?").toLowerCase();


function playRound(playerSelection, computerSelection) {
    console.log(`the opponent chose: ${computerSelection}`);
    console.log(`you chose: ${playerSelection}`);

    if (playerSelection === computerSelection) {
        return "it's a tie!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! paper beats rock"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "you win! rock beats scissors!"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "you win! paper beats rock!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "you lose! scissors beat paper!"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "you lose! rock beats scissors!"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "you win! scissors beat paper!"
    } else {
        return "user... pick RIGHT!!!"
    }
};


function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("rock, paper or scissors?").toLowerCase();
        const roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);

        if (roundResult === "you win! rock beats scissors!" || "you win! paper beats rock!" || "you win! scissors beat paper!") {
            playerScore++;
        } else if (roundResult === "You lose! paper beats rock" || "you lose! scissors beat paper!" || "you lose! rock beats scissors!") {
            computerScore++;
        }
    }

    console.log("GAME OVER");
    console.log("player score :" + playerScore)
    console.log("computer score :" + computerScore)
}

game();
