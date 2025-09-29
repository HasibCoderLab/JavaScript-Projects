const choices = ["Rock", "Paper", "Scissors"];
const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const gameResultDisplay = document.getElementById("game-result");

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "🤝 It's a Tie!";
    } else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        return "🎉 You Win!";
    } else {
        return "😞 You Lose!";
    }
}

function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);

    userChoiceDisplay.textContent = userChoice;
    computerChoiceDisplay.textContent = computerChoice;
    gameResultDisplay.textContent = result;
}

document.getElementById("rock").addEventListener("click", () => playGame("Rock"));
document.getElementById("paper").addEventListener("click", () => playGame("Paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("Scissors"));
