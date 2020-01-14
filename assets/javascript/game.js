//List out all the possible letter options [array]
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//The computer will choose a random letter out of the list  
var compGuess = options[Math.floor(Math.random() * options.length)];

//The user will guess a letter by clicking its button on the keyboard. 
//If a user's letter matches the computer's letter (they win 1 point and the game resets).
//If the user's letter does not match the computer's letter (the number of guesses left goes down). 
//Each guess will show in "guesses so far"
//If the guesses exceed 9 attemps, the user losses and the game resets

document.onkeyup = function() {
  var userGuess = String.fromCharCode(event.keyCode).
  toLowerCase();
  if (userGuess===compGuess) {
    alert("Yay!");
  }
  else {
    alert("oops!");
  }
}

//Create variables to hold the number of wins, losses, guesses made, and guesses left
var wins = 0
var losses = 0
var guessesLeft = 9
var guessesMade