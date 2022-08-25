



// Function generates random output from computer
function ComputerChoice() {
    let compChoice = Math.floor(
        Math.random() * 3 + 1
    )

    switch (compChoice) {
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

let usrCount = 0;
let compCount = 0;

// Function determines, if user won or not
function isWin(userChoice) {
    compChoice = ComputerChoice();
    console.log(`You chose ${userChoice}`);
    console.log(`Computer chose ${compChoice}`);

    if (userChoice === compChoice) {
        console.log(`Tie`)
    } else if (
        userChoice === "rock" && compChoice === "scissors" ||
        userChoice === "paper" && compChoice === "rock" ||
        userChoice === "scissors" && compChoice === "paper"
    ) {
        console.log(`You won!`);
        usrCount += 1;
        userScore.textContent = `User score: ${usrCount}`;
        scoreParent.replaceChild(userScore, userScore);
    } else {
        console.log(`You lost!`);
        compCount += 1;
        compScore.textContent = `Computer Score: ${compCount}`;
        scoreParent.replaceChild(compScore, compScore);
    }
    checkScore()
}

function playRound(userChoice) {
    if(usrCount >= 5 || compCount >= 5) {
        return;
    } else {
        isWin(userChoice);
    }
}

function checkScore() {
    if(usrCount >= 5) {
        let gameOver = 1;
        winOrLose.textContent = 'Human won';
        scoreParent.replaceChild(winOrLose, winOrLose);
        return gameOver;
    } else if(compCount >= 5) {
        winOrLose.textContent = 'Machine won';
        scoreParent.replaceChild(winOrLose, winOrLose);
        let gameOver = 1;
        return gameOver;
    } 
}




const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const scoreParent = document.querySelector('.scoreParent');
const userScore = document.querySelector('.userScore');
const compScore = document.querySelector('.compScore');
const winOrLose = document.createElement('div');
scoreParent.appendChild(winOrLose);



rock.addEventListener('click', () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));

