const choices = ["Rock", "Paper", "Scissors"];
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const gameResultDisplay = document.getElementById("game-result");

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a 🤝 Draw!";
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

    // Small animation in the result
    gameResultDisplay.style.animation = "bounceIn 0.6s ease";
    setTimeout(() => {
        gameResultDisplay.style.animation = "";
    }, 600);
}

rockButton.addEventListener("click", () => playGame("Rock"));
paperButton.addEventListener("click", () => playGame("Paper"));
scissorsButton.addEventListener("click", () => playGame("Scissors"));
