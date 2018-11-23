'use strict'

const renderGame = () => {
    puzzleDisplay.innerHTML = ''
    guessDisplay.textContent = game.statusMessage;
    
    // Renders puzzle in more readable form
    game.puzzle.split('').forEach(letter => {
        const letterElement = document.createElement('span');
        letterElement.textContent = letter;
        puzzleDisplay.appendChild(letterElement);      
    });
};

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