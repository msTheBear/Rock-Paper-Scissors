let playerScore = 0;
let computerScore = 0;
let playerWon = "Player";
let computerWon = "Computer";
document.getElementById("winnerIs").style.display = "none";

function playerPlayRock() {
    let playerRock = document.querySelector("#buttonRock");
    playerRock.addEventListener("click", () => {
    })
    document.getElementsByClassName("playerChoice")[0].src = "./images/rock.svg";
    let playerChoice = ["rock"];
    return playerChoice;
}

function playerPlayPaper() {
    let playerPaper = document.querySelector("#buttonPaper");
    playerPaper.addEventListener("click", () => {
    })
    document.getElementsByClassName("playerChoice")[0].src = "./images/paper.svg";
    let playerChoice = ["paper"];
    return playerChoice;
}

function playerPlayScissors() {
    let playerScissors = document.querySelector("#buttonScissors");
    playerScissors.addEventListener("click", () => {
    })
    document.getElementsByClassName("playerChoice")[0].src = "./images/scissors.svg";
    let playerChoice = ["scissors"];
    return playerChoice;
}

function computerPlay() {
    let computerChoice = ["rock", "paper", "scissors"]
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function playRoundRock(playerSelection, computerSelection) {
    let playerChoice = playerPlayRock();
    let computerChoice = computerPlay();

    if (playerChoice && computerChoice === "paper") {
        computerScore++;
        document.getElementsByClassName("computerChoice")[0].src = "./images/paper.svg";
    } else if (playerChoice && computerChoice === "scissors") {
        playerScore++;
        document.getElementsByClassName("computerChoice")[0].src = "./images/scissors.svg";
    } else if (playerChoice && computerChoice === "rock") {
        document.getElementsByClassName("computerChoice")[0].src = "./images/rock.svg";
    }

    document.getElementById("playerClicks").innerHTML = playerScore;
    document.getElementById("computerClicks").innerHTML = computerScore;

    if (playerScore === 5) {
        win()
    } else if (computerScore === 5) {
        lose()
    }
}

function playRoundPaper(playerSelection, computerSelection) {
    let playerChoice = playerPlayPaper();
    let computerChoice = computerPlay();

    if (playerChoice && computerChoice === "rock") {
        playerScore++;
        document.getElementsByClassName("computerChoice")[0].src = "./images/rock.svg";
    } else if (playerChoice && computerChoice === "paper") {
        document.getElementsByClassName("computerChoice")[0].src = "./images/paper.svg";
    } else if (playerChoice && computerChoice === "scissors") {
        computerScore++;
        document.getElementsByClassName("computerChoice")[0].src = "./images/scissors.svg";
    }

    document.getElementById("playerClicks").innerHTML = playerScore;
    document.getElementById("computerClicks").innerHTML = computerScore;

    if (playerScore === 5) {
        win()
    } else if (computerScore === 5) {
        lose()
    }
}

function playRoundScissors(playerSelection, computerSelection) {
    let playerChoice = playerPlayScissors();
    let computerChoice = computerPlay();

    if (playerChoice && computerChoice === "rock") {
        computerScore++;
        document.getElementsByClassName("computerChoice")[0].src = "./images/rock.svg";
    } else if (playerChoice && computerChoice === "paper") {
        playerScore++;
        document.getElementsByClassName("computerChoice")[0].src = "./images/paper.svg";
    } else if (playerChoice && computerChoice === "scissors") {
        document.getElementsByClassName("computerChoice")[0].src = "./images/scissors.svg";
    }

    document.getElementById("playerClicks").innerHTML = playerScore;
    document.getElementById("computerClicks").innerHTML = computerScore;

    if (playerScore === 5) {
        win()
    } else if (computerScore === 5) {
        lose()
    }
}

function win() {
    document.getElementById("whoWon").innerHTML = "You win";
    document.getElementById("winnerIs").style.display = "inline";
    document.getElementById("buttonRock").disabled = true;
    document.getElementById("buttonPaper").disabled = true;
    document.getElementById("buttonScissors").disabled = true;
    startConfetti();
}

function lose() {
    document.getElementById("whoWon").innerHTML = "You lose";
    document.getElementById("winnerIs").style.display = "inline";
    document.getElementById("buttonRock").disabled = true;
    document.getElementById("buttonPaper").disabled = true;
    document.getElementById("buttonScissors").disabled = true;
    document.body.classList.add("lose");
}

function resetButton() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("winnerIs").style.display = "none";
    document.getElementById("playerClicks").innerHTML = playerScore;
    document.getElementById("computerClicks").innerHTML = computerScore;
    document.getElementById("buttonRock").disabled = false;
    document.getElementById("buttonPaper").disabled = false;
    document.getElementById("buttonScissors").disabled = false;
    stopConfetti();
    document.getElementsByClassName("computerChoice")[0].src = "./images/rock_paper_scissors.svg";
    document.getElementsByClassName("playerChoice")[0].src = "./images/rock_paper_scissors.svg";
    document.body.classList.remove("lose");
}