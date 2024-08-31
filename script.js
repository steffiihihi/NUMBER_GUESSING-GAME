let numberToGuess;
let chances;
let attempts = 0;

function startGame() {
    const lowerBound = parseInt(document.getElementById('lower-bound').value);
    const upperBound = parseInt(document.getElementById('upper-bound').value);
    const resultDiv = document.getElementById('result');
    const gameArea = document.getElementById('game-area');

    if (isNaN(lowerBound) || isNaN(upperBound) || lowerBound >= upperBound) {
        resultDiv.innerHTML = "<p>Please enter valid lower and upper bounds where the lower bound is less than the upper bound.</p>";
        return;
    }

    numberToGuess = Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;
    chances = Math.round(Math.log2(upperBound - lowerBound + 1));
    attempts = 0;

    resultDiv.innerHTML = `<p>You have ${chances} chances to guess the number between ${lowerBound} and ${upperBound}.</p>`;
    gameArea.style.display = 'block';
}

function makeGuess() {
    const userGuess = parseInt(document.getElementById('user-guess').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(userGuess)) {
        resultDiv.innerHTML = "<p>Please enter a valid number.</p>";
        return;
    }

    attempts++;

    if (userGuess === numberToGuess) {
        resultDiv.innerHTML = `<p>Congratulations! You guessed the number ${numberToGuess} in ${attempts} attempts.</p>`;
        document.getElementById('game-area').style.display = 'none';
    } else if (attempts >= chances) {
        resultDiv.innerHTML = `<p>Sorry, you've used all your chances. The number was ${numberToGuess}.</p>`;
        document.getElementById('game-area').style.display = 'none';
    } else {
        if (userGuess < numberToGuess) {
            resultDiv.innerHTML = `<p>Your guess is too low. You have ${chances - attempts} attempts left.</p>`;
        } else {
            resultDiv.innerHTML = `<p>Your guess is too high. You have ${chances - attempts} attempts left.</p>`;
        }
    }
}
