'use strict'

const Game = function (word, guessesAllowed) {
    if (typeof word !== 'string' || typeof guessesAllowed !== 'number') {
        throw Error('Give a string for the word to be guessed and a number for the guesses allowed');
    };
    this.word = word.toLowerCase().split(''),
    this.guessesAllowed = guessesAllowed,
    this.guessedLetters = []
};

// Gets word puzzle, with correct letter guesses filled in, to be shown to player
Game.prototype.getPuzzle = function () {
    let puzzle = '';

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter;
        } else {
            puzzle += '*';
        }
    });

    return puzzle;
}

Game.prototype.guessLetter = function (letter) {
    if (typeof letter !== 'string' || letter.length !== 1) {
        throw Error('You must give a single letter');
    };
    letter = letter.toLowerCase();
    const isUnique = !this.guessedLetters.includes(letter);
    const isWrongGuess = !this.word.includes(letter);

    // Accounting for unique and non-unique guesses
    if (isUnique) {
        this.guessedLetters.push(letter);
    } else if (!isUnique) {
        throw Error(`You have already guessed ${letter}`);
    };

    // Hangman mechanic of game
    if (isUnique && isWrongGuess) {
        this.guessesAllowed -= 1;
    };
};

let game = new Game('yeah', 3);



window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode);
    game.guessLetter(guess);
    console.log(game.getPuzzle());
    console.log(`You have ${game.guessesAllowed} guesses left.`);
})

