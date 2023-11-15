const prompt = require ("prompt-sync")();

let wins = 0
let losses = 0
let ties = 0

while (true) {
  const userChoice = prompt ("Enter rock, paper, or scissors (or q to quit):  ");
  if (userChoice.toLowerCase() === "q"){
    break;
  };

  if (userChoice !== "rock" && 
      userChoice !== "paper" && 
      userChoice !== "scissors"
    ){
      console.log("Not a valid choice, try again");
      continue;
  };

  const choices =["rock", "paper","scissors"];
  const randomIndex = Math.round(Math.random () * 2);
  const computerChoice = choices[randomIndex];

  console.log(`The computer chose ${computerChoice}.`);

  if (computerChoice === userChoice){
    console.log("You both tied");
    ties++;

  } else if (
    (userChoice === "paper" && computerChoice === 'rock') ||  (userChoice === "rock" && computerChoice === 'scissors') || (userChoice === "scissors" && computerChoice === 'paper')){
    console.log('You win!');
    wins++;

  } else {
    console.log('You lost...');
    losses++;
  }
};

console.log(`Game record is = Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`);