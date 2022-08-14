

// Function asks for user input(case insensitive)
function AskUserInput() {
    let userChoice = prompt("Enter one of the three: \
    Rock, paper, scissors")
    userChoice = userChoice.toLowerCase();
    return userChoice;
}

// Function generates random output from computer
function ComputerChoice() {
    let compChoice = Math.floor (
        Math.random() * 3 + 1
    )

    switch(compChoice) {
        case 1: 
            compChoice = "rock";
            break;
        case 2: 
            compChoice = "paper";
            break;
        case 3: 
            compChoice = "scissors";
    }

    return compChoice;
}

// Function determines, if user won or not
function IsWin() {
    userChoice = AskUserInput()
    compChoice = ComputerChoice();
    console.log(`You chose ${userChoice}`);
    console.log(`Computer chose ${compChoice}`);

    if(userChoice === compChoice) {
        console.log(`Tie`)
   } else if (
    userChoice === "rock" && compChoice === "scissors" ||
    userChoice === "paper"&& compChoice === "rock" ||
    userChoice === "scissors" && compChoice === "paper"
   ) {
    console.log(`You won!`)
   } else {
    console.log(`You lost!`)
   }
}

function PlayRounds(RoundsNum) {
    for(let i = 0; i < RoundsNum; i++) {
        IsWin();
    }
}

PlayRounds(5);

