// Creates an array that lists out all of the options (any alpha key).
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Start game with a score of zero
var score = 0;

// Creating variables to hold the number of wins, losses, and ties. They start at 0. This is Javascript
var wins = 0;
var losses = 0;
var chancesLeft = 3;
var pastLetters = [ ];

// Create variables that hold references to the places in the HTML where we want to display things, or render on the page. 
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var chancesText = document.getElementById("chancesleft-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerGuessText = document.getElementById("computerguess-text");


// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess)

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // To determine which key is pressed
    var userGuess = event.key;

    // Include If Logic to determine the outcome of the Game. 
    if (computerGuess === userGuess) {
        wins++;
        chancesLeft = 3;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(computerGuess);
        alert("Win! You must be the pokemaster. Psyduck has a *headache*");

    } else {
        chancesLeft--;
        console.log(chancesLeft);
        pastLetters.push(" " + userGuess);
        alert("Psy yaya! You are NOT a pokemaster");

        if (chancesLeft === 0) {
            losses++;
            chancesLeft = 3;
        }
    }


    // Display the wins, losses, guesses left and user's guesses
    directionsText.textContent = "Guess what letter Psyduck is thinking of";
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    chancesText.textContent = "Guesses left: " + chancesLeft;
    userChoiceText.textContent = "Your Guesses so far: " + pastLetters;
}
