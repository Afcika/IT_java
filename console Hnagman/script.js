// Array of words to choose from
var words = ["lukka","luka"];

// Selecting a random word from the array
var selectedWord = words[Math.floor(Math.random() * words.length)];

// Array to store the letters guessed by the user
var guessedLetters = [];

// Number of tries allowed
var maxTries = selectedWord.length;
var remainingTries = maxTries;

// Function to display current progress of the word
function displayWord() {
    var display = '';
    for (var i = 0; i < selectedWord.length; i++) {
        if (guessedLetters.indexOf(selectedWord[i]) !== -1) {
            display += selectedWord[i];
        } else {
            display += '_';
        }
        display += ' ';
    }
    return display;
}

// Function to check if the word has been completely guessed
function isWordGuessed() {
    for (var i = 0; i < selectedWord.length; i++) {
        if (guessedLetters.indexOf(selectedWord[i]) === -1) {
            return false;
        }
    }
    return true;
}

// Function to start the game
function startGame() {
    while (remainingTries > 0 && !isWordGuessed()) {
        var guess = prompt("Guess a letter. Remaining tries: " + remainingTries + "\nCurrent word: " + displayWord());
        if (guess === null) {
            break; // If user cancels prompt, exit the game
        }
        guess = guess.toLowerCase();
        if (guess.length !== 1 || !(guess >= 'a' && guess <= 'z')) {
            alert("Please enter a single letter.");
            continue;
        }
        if (guessedLetters.indexOf(guess) !== -1) {
            alert("You've already guessed that letter.");
            continue;
        }
        guessedLetters.push(guess);
        if (selectedWord.indexOf(guess) === -1) {
            remainingTries--;
            alert("Incorrect guess!");
        } else {
            alert("Correct guess!");
        }
    }
    if (isWordGuessed()) {
        alert("Congratulations! You've guessed the word: " + selectedWord);
    } else {
        alert("Sorry, you've run out of tries. The word was: " + selectedWord);
    }
}


// Start the game
startGame();
