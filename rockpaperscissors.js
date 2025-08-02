let humanScore = 0
let computerScore = 0

const moves = ["rock", "paper", "scissors"]

const btn_rock = document.querySelector("#btn_rock");
const btn_paper = document.querySelector("#btn_paper");
const btn_scissors = document.querySelector("#btn_scissors");

const result_txt = document.querySelector("#result_txt")
const scoreboard_txt = document.querySelector("#scoreboard_txt")

btn_rock.addEventListener("click", () => playGame("rock"));
btn_paper.addEventListener("click", () => playGame("paper"));
btn_scissors.addEventListener("click", () => playGame("scissors"));


function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()
    let result = ""

    //Draw
    if (humanChoice === computerChoice) {
        result = "It's a draw!"
    }

    // Rock
    else if (humanChoice === moves[0]) {
        if (computerChoice === moves[2]) {
            result = "Player wins this round."
        }
        else if (computerChoice === moves[1]) {
            result = "Computer wins this round."
        }
    }

    // Paper
    else if (humanChoice === moves[1]) {
        if (computerChoice === moves[0]) {
            result = "Player wins this round."
        }
        else if (computerChoice === moves[2]) {
            result = "Computer wins this round."
        }
    }

    // Scissors
    else if (humanChoice === moves[2]) {
        if (computerChoice === moves[1]) {
            result = "Player wins this round."
        }
        else if (computerChoice === moves[0]) {
            result = "Computer wins this round."
        }
    }

    if (result.includes("Player")) humanScore++;
    else if (result.includes("Computer")) computerScore++;

    return result + "<br> Player: " + humanChoice + " CPU: " + computerChoice
}

function playGame(humanChoice) {
    if (humanScore < 5 && computerScore < 5){
        let computerSelection = getComputerChoice()
        result_txt.innerHTML = playRound(humanChoice, computerSelection)
        scoreboard_txt.innerHTML = "Player: " + humanScore + ", CPU: " + computerScore
        if (humanScore == 5) {
            result_txt.innerHTML = "Player Wins!"
            setBtnsText("Reset", "Reset", "Reset")
        }
        else if (computerScore == 5) {
            result_txt.innerHTML = "Computer Wins!"
            setBtnsText("Reset", "Reset", "Reset")
        }
    }
    else {
        humanScore = 0
        computerScore = 0
        setBtnsText("Rock", "Paper", "Scissors")
        scoreboard_txt.innerHTML = "Player: 0, CPU: 0"
        result_txt.innerHTML = "Press a button to play"
    }
}

function setBtnsText(rock, paper, scissors){
    btn_rock.innerHTML = rock
    btn_paper.innerHTML = paper
    btn_scissors.innerHTML = scissors
}

