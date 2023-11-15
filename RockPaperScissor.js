const prompt = require ("prompt-sync")();

let wins = 0
let losses = 0
let ties = 0

const playerchoice = prompt ("Enter rock, paper, or scissors:  ")

if (playerchoice !== "rock" && 
    playerchoice !== "paper" && 
    playerchoice !== "scissors"){
    console.log("Not a valid choice, try again")
}

const choices =["rock", "paper","scissors"]
const randomIndex = Math.round(Math.random () * 2)
const computerChoice = choices[randomIndex];
console.log(computerChoice);

if (computerChoice === playerchoice){
  console.log(draw);
  ties++
} else if (
  (playerchoice === "paper" && computerChoice === 'rock') ||  (playerchoice === "rock" && computerChoice === 'scissors') || (playerchoice === "scissors" && computerChoice === 'paper')){
  console.log('You win!');
  wins++
} else {
  console.log('You lost...');
  losses++
}
