function getComputerChoice() {
    const rock = 0;
    const paper = 1;
    const scissors = 2;

    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock"
    } else if (randomNumber === 1) {
        return "paper"
    } else if (randomNumber === 2) {
        return "scissors"
    } else {}
}

const computerSelection = getComputerChoice();
const playerSelection = prompt("rock, paper or scissors?").toLowerCase();


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "it's a tie!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return `You lose! paper beats rock`
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return `you win! paper beats rock!`
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return `you win! paper beats rock!`

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return `you lose! scissors beat paper!`

    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return `you lose! rock beats scissors!`

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "you win! scissors beat paper!"
    }
}

console.log(playRound(playerSelection, computerSelection));
