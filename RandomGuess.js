const prompt = require ("prompt-sync")();

const target = Math.round(Math.random() * 100)
console.log(target);

let guesses  = 0;

const guess = Number (prompt ("Guess the number (0-100): "));

if (guess > target) {
  console.log("Your guess is too high.");
}
else{
  console.log("Your guess is too low.");
}