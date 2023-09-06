function getComputerChoice() {
    const rock = 0;
    const paper = 1;
    const scissors = 2;

    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "computer pick: rock!"
    } else if (randomNumber === 1) {
        return "computer pick: paper!"
    } else if (randomNumber === 2) {
        return "computer pick: scissors!"
    } else {}

}

console.log(getComputerChoice());
