'use strict'

const NewGame = function (word, guessesAllowed) {
    if ((typeof word) !== 'string' || (typeof guessesAllowed) !== 'number') {
        throw Error('Give a string for the word to be guessed and a number for the guesses allowed');
    };
    this.word = word.toLowerCase().split(''),
    this.guessesAllowed = guessesAllowed,
    this.guessedLetters = []
};

// Gets word puzzle, with correct letter guesses filled in, to be shown to player
NewGame.prototype.getPuzzle = function () {
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

let game = new NewGame('yeah', 3);
console.log(game);
console.log(game.getPuzzle());

