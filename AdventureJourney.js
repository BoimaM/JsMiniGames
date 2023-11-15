const prompt = require ("prompt-sync")();

//Finish this game and make it more creative. It is actually fun to make! Design something really creative please. 

const answer = prompt ("Would you like to play (y/n: )");

if (answer.toLowerCase()=== "y"){
  const answer2 = prompt("Would you like to go left or  go right (left/right)?: ")

    if (answer2.toLowerCase() === "left "){
      console.log("You went left and fell of the bridge... Game over! ");
    }


}
else{
  console.log("That too bad!");
}