//List out all the possible letter options [array] & an array holder for wrong letter guesses
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Create counter variables to hold the number of wins, losses, and guesses left
var wins = 0;
var losses = 0;
var left = 9;
var guesses = "";
//The computer will choose a random letter out of the list  

var compGuess = options[Math.floor(Math.random() * options.length)];

//Functions
document.onkeyup = function () {
  var userGuess = String.fromCharCode(event.keyCode).
    toLowerCase();
  guesses = guesses + userGuess; //this will append the previous guesses!


  //Comparissions
  if (userGuess === compGuess) {
    wins++;
    left = 9;
    guesses = "";
  }
  else {
    left--;
  }
  if (left === 0) {
    losses++;
    left = 9;
    guesses = "";
  }

  var html = "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses Left: " + left + "</p>" + "<p>Your Guesses so Far: " + guesses + "</p>"
  document.querySelector("#game").innerHTML = html;

}
