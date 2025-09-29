const choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let round = 1;

const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const gameResultDisplay = document.getElementById("game-result");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const roundNumberDisplay = document.getElementById("round-number");

const clickSound = document.getElementById("click-sound");
const winSound = document.getElementById("win-sound");
const loseSound = document.getElementById("lose-sound");

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
        playerScore++;
        return "🎉 You Win!";
    } else {
        computerScore++;
        return "😞 You Lose!";
    }
}

function playGame(userChoice) {
    clickSound.play();
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);

    userChoiceDisplay.textContent = userChoice;
    computerChoiceDisplay.textContent = computerChoice;
    gameResultDisplay.textContent = result;

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    roundNumberDisplay.textContent = ++round;

    if (result === "🎉 You Win!") winSound.play();
    if (result === "😞 You Lose!") loseSound.play();

    // গেম শেষ করার শর্ত
    if (round > 5) {
        setTimeout(() => {
            alert(
                playerScore > computerScore
                    ? "🏆 Congratulations! You won the game!"
                    : "😢 Better luck next time!"
            );
            restartGame();
        }, 500);
    }
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    round = 1;
    userChoiceDisplay.textContent = "-";
    computerChoiceDisplay.textContent = "-";
    gameResultDisplay.textContent = "-";
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    roundNumberDisplay.textContent = round;
}

document.getElementById("rock").addEventListener("click", () => playGame("Rock"));
document.getElementById("paper").addEventListener("click", () => playGame("Paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("Scissors"));
document.getElementById("restart").addEventListener("click", restartGame);
