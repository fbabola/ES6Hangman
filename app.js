let game = new Game('yeah', 3);

const puzzleDisplay = document.querySelector('#puzzle-display');
const guessDisplay  = document.querySelector('#guess-display');
puzzleDisplay.textContent = `The puzzle is ${game.getPuzzle()}`;
guessDisplay.textContent = game.giveStatusMessage();

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode);
    game.guessLetter(guess);
    game.manageGameState();
    puzzleDisplay.textContent = `The puzzle is ${game.getPuzzle()}`;
    guessDisplay.textContent = game.giveStatusMessage();
})