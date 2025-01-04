document.addEventListener('DOMContentLoaded', () => {
    const numberContainer = document.getElementById('numbers');
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const resetButton = document.getElementById('resetButton');
    const feedback = document.getElementById('feedback');
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    // Create floating numbers
    for (let i = 0; i < 50; i++) {
        const number = document.createElement('div');
        number.classList.add('number');
        number.textContent = Math.floor(Math.random() * 100);
        number.style.top = Math.random() * 100 + 'vh';
        number.style.left = Math.random() * 100 + 'vw';
        number.style.animationDelay = Math.random() * 10 + 's';
        numberContainer.appendChild(number);
    }

    guessButton.addEventListener('click', () => {
        const userGuess = parseInt(guessInput.value, 10);
        if (isNaN(userGuess)) {
            feedback.textContent = 'Please enter a valid number.';
        } else if (userGuess === randomNumber) {
            feedback.textContent = 'Congratulations! You guessed the correct number!';
        } else if (userGuess < randomNumber) {
            feedback.textContent = 'Try a higher number!';
        } else {
            feedback.textContent = 'Try a lower number!';
        }
    });

    resetButton.addEventListener('click', () => {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        feedback.textContent = '';
        guessInput.value = '';
    });
});
