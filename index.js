function playGame(user) {

    // const namesArray = ["rock", "paper", "scissors"];
    

    let computerChoice = Math.random() * 3;
    if (computerChoice < 1) {
        computerChoice = "rock";
    } else if (computerChoice < 2) {
        computerChoice = "scissors";
    } else {
        computerChoice = "paper";
    }

    if (computerChoice === user) {
        console.log("draw");
    } else if (computerChoice === "rock" && user === "paper") {
        console.log(`Computer has selected ${computerChoice} and you selected ${user}. Computer has won`);
    } else if (computerChoice === "rock" && user === "scissors") {
        console.log(`Computer chose ${computerChoice} and you chose ${user}. COmputer has won! `);
    } else if (computerChoice === "paper" && user === "rock") {
        console.log(`computer chose ${computerChoice} and you chose ${user}. Computer won this round`);
    }
    else if (computerChoice === "paper" && user === "scissors") {
        console.log(`Computer chose ${computerChoice} and you chose ${user}. You have won!!!!!`);
    } else if (computerChoice === "scissors" && user === "rock") {
        console.log(`computer chose ${computerChoice} and you chose ${user}. You hav e won`);
    } else if (computerChoice === "scissors" && user === "paper") {
        console.log(`Computer chose ${computerChoice} and you chose ${user}. Computer won`);
    }

}

playGame("paper");