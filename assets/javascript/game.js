//List out all the possible letter options [array]
var compLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Create variables to hold the number of wins, losses, guesses made, and guesses left
var wins = 0
var losses = 0
var guessesLeft = 9
var guessesMade

//The computer will choose a random letter out of the list  
var random = compLetters[Math.floor(Math.random() * compLetters.length)];
console.log(random);

/*The user will then guess a letter by clicking its button on the keyboard. 
Each guess will show in "guesses so far"*/

//If a user's letter matches the computer's random letter they win 1 point and the game resets

/*If the user's letter does not match the computer's random letter the number of guesses left goes down. 
  If the guesses exceed 9 attemps, the user losses and the game resets*/
