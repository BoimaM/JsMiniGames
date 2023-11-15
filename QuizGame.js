const prompt = require ("prompt-sync")();

// This is a simple quiz game (run in node.js)
// Questions can be added/removed based on needs of quiz.

// Title can be changed relating to name of quiz. 
console.log("Welcome to the Computer Hardware Quiz!");

let correctAnswers = 0;

// Value amount of question within quiz. 
const totalQuestions = 3;

// Question prompts and answers can be adjusted as needed
const answer1 =  prompt ("What is the brain of the computer? ");
const correctAnswer1 = "CPU";

// Answer . type = (ex.toUpperCase) can be adjusted as needed
if (answer1.toUpperCase() === correctAnswer1){
  console.log("Correct!");
  correctAnswers ++;
}else{
  console.log("Wrong...");
}


const answer2 =  prompt ("What is better 3090ti or a 4060? ");
const correctAnswer2 = "3090ti";

if (answer2.toLowerCase() === correctAnswer2){
  console.log("Correct!");
  correctAnswers ++;
}else{
  console.log("Wrong...");
}


const answer3 =  prompt ("What is the recommend amount of RAM in 2023? ");
const correctAnswer3 = "16GB";

if (answer3.toUpperCase() === correctAnswer3){
  console.log("Correct!");
  correctAnswers ++;
}else{
  console.log("Wrong...");
}

const percent = Math.round((correctAnswers / totalQuestions) * 100)

console.log(`You got ${correctAnswers} questions correct!`);
console.log(`You scored ${percent}%`);
console.log("Hello");