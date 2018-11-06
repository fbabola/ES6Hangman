'use strict'

const Game = function (word, guessesAllowed) {
    if (typeof word !== 'string' || typeof guessesAllowed !== 'number') {
        throw Error('Give a string for the word to be guessed and a number for the guesses allowed');
    };
    this.word = word.toLowerCase().split(''),
    this.guessesAllowed = guessesAllowed,
    this.guessedLetters = [], 
    this.gameState = 'playing'
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
    // Function only works if user is still playing
    if (this.gameState !== 'playing') {
        return;
    };

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

Game.prototype.manageGameState = function () {
    if (this.guessesAllowed === 0) {
        this.gameState = 'failed';
    }
    
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter));

    if (finished) {
        this.gameState = 'finished';
    };
}

Game.prototype.giveStatusMessage = function () {
    if (this.gameState === 'playing') {
        return `Guesses left: ${this.guessesAllowed}`;
    } else if (this.gameState === 'failed') {
        return `Nice try! The word was "${this.word.join('')}"`;
    } else if (this.gameState === 'finished') {
        return 'Great work! You guessed the word.';
    };
};