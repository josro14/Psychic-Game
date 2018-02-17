var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// variables as a starting point
var wins = 0
var losses = 0
var guesses = 10
// random letter generator
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(computerChoice);

document.onkeypress = function (event) {
    var userGuess = event.key;

    if (userGuess === computerChoice) {
        wins++;
    } else
        guesses--;

    if (guesses === 0) {
        losses++;
        guesses = 10;
    }
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guesses").innerHTML = "Guesses left: " + guesses;
    document.getElementById("letters").innerHTML = "Your guess: " + userGuess;
    // ***pseudocode*** somehow display all used letters until the correct letter is guessed
    // ***pseudocode*** reset random letter once userGuess === computerChoice
}
