let humanScore = 0
let computerScore = 0
const moves = ["rock", "paper", "scissors"]

function getComputerChoice(){
    const randomInt = Math.random();
    // 0.3 and 0.6 so that there's equal chances for each
    if (randomInt <= 0.3) return moves[0]
    if (randomInt <= 0.6) return moves[1]
    return moves[2]
}

function getHumanChoice(){
    return prompt("Enter choice: ")
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()

    //Draw
    if (humanChoice === computerChoice) {
        console.log("It's a draw!")
    }

    // Rock
    if (humanChoice === moves[0]) {
        if (computerChoice === moves[2]) {
            console.log("Player Wins!")
        }
        else if (computerChoice === moves[1]) {
            console.log("Computer Wins!")
        }
    }

    // Paper
    else if (humanChoice === moves[1]) {
        if (computerChoice === moves[0]) {
            console.log("Player Wins!")
        }
        else if (computerChoice === moves[2]) {
            console.log("Computer Wins!")
        }
    }

    // Scissors
    else if (humanChoice === moves[2]) {
        if (computerChoice === moves[1]) {
            console.log("Player Wins!")
        }
        else if (computerChoice === moves[0]) {
            console.log("Computer Wins!")
        }
    }

    console.log("Player: " + humanChoice + " CPU: " + computerChoice)
}

function playGame() {
    for (let i = 0; i < 5; i++){
        let humanSelection = getHumanChoice()
        let computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
    }
    
}

playGame()