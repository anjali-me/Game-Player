let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const rpsMsg = document.querySelector("#rps-msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  rpsMsg.innerText = "It's a draw! Try again.";
  rpsMsg.style.backgroundColor = "#333";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    rpsMsg.innerText = `You win! ${userChoice} beats ${compChoice}`;
    rpsMsg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    rpsMsg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
    rpsMsg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = false;
    if (userChoice === "rock") {
      userWin = compChoice === "scissors";
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock";
    } else {
      userWin = compChoice === "paper";
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const userChoice = choice.id;
    playGame(userChoice);
  });
});
