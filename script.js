let randomNumber;
let attempts;

function initializeGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('attempts').textContent = attempts;
    document.getElementById('feedback').textContent = '';
    document.getElementById('guessInput').value = '';
}

document.getElementById('guessButton').addEventListener('click', () => {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    attempts++;
    document.getElementById('attempts').textContent = attempts;

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        document.getElementById('feedback').textContent = 'Please enter a valid number between 1 and 100.';
    } else if (userGuess < randomNumber) {
        document.getElementById('feedback').textContent = 'Too low! Try again.';
    } else if (userGuess > randomNumber) {
        document.getElementById('feedback').textContent = 'Too high! Try again.';
    } else {
        document.getElementById('feedback').textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
    }
});

document.getElementById('resetButton').addEventListener('click', initializeGame);

// Initialize the game when the page loads
initializeGame();