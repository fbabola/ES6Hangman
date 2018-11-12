'use strict'

const renderGame = () => {
    puzzleDisplay.textContent = `The puzzle is ${game.puzzle}`;
    guessDisplay.textContent = game.statusMessage;
}

const startGame = async () => {
    const puzzle = await getPuzzle('2');
    game = new Game(puzzle, 5);
    renderGame();
};

const puzzleDisplay = document.querySelector('#puzzle-display');
const guessDisplay  = document.querySelector('#guess-display');
const resetButton   = document.querySelector('#reset-button');

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game.guessLetter(guess);
    game.manageGameState();
    renderGame();
});
resetButton.addEventListener('click', startGame);

// Game starting
let game;

startGame();