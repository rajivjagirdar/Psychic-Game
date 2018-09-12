
var psychicLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let wins = 0;
let losses = 0;
let guesses = 9;
let guessesLeft = 9;
let guessedLetters = [];
var letterToGuess = null;

var computerGuess = psychicLetters[Math.floor(Math.random() * psychicLetters.length)];

function updateGuessesLeft() {
    document.querySelector('#guessLeft').innerHTML = "Guesses Left: " + guessesLeft;
};

function updateLetterToGuess() {
    this.letterToGuess = this.psychicLetters[Math.floor(Math.random() * this.psychicLetters.length)];
};

function updateGuessesSoFar() {
    document.querySelector('#soFar').innerHTML = "Your Guesses So Far: " + guessedLetters.join(', ');
};

var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var check = psychicLetters.includes(userGuess);

    if (check === false) {
        alert("That was not a valid guess, try again?");
        return false;
    } else if (check === true) {
        guessesLeft--;
        guessedLetters.push(userGuess);
        updateGuessesLeft();
        updateGuessesSoFar();

        if (guessesLeft > 0) {
            if (userGuess == letterToGuess) {
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                userGuess = userGuess.toUpperCase();
                reset();
            }
        } else if (guessesLeft == 0) {
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            reset();
        }
        return false;
    } else {
        alert("Oops, there was an error");
    }
};