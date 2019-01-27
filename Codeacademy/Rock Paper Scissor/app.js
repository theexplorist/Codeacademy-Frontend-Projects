//Determining user's choice
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Invalid Input");
  }
};

// A function which is used to take computer's choice
const getComputerChoice = () => {
  let n = Math.floor(Math.random() * 3);
  if (n === 0) {
    return "rock";
  } else if (n === 1) {
    return "scissor";
  } else {
    return "paper";
  }
};

// Comparing the two choices
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "bomb") {
    return "User Won";
  }
  if (userChoice === computerChoice) {
    return "Game Tied";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") return "Computer Won";
    else return "User Won";
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") return "Computer Won";
    else return "User Won";
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") return "Computer Won";
    else return "User Won";
  }
};

// GamePlay
const playGame = () => {
  let userChoice = getUserChoice("bomb");
  let computerChoice = getComputerChoice();
  console.log(userChoice, computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

//Playing The Game
playGame();
