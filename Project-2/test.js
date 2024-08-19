let attempts = 0;
let secret = Math.floor(Math.random() * 100) + 1;
console.log(secret);

document.getElementById('submitGuess').addEventListener('click', function() {
    let guess = parseInt(document.getElementById('guessField').value);
    let output = document.getElementById('output');

    if (isNaN(guess) || guess < 1 || guess > 100) {
        output.textContent = "Invalid input. Please enter a number between 1 and 100.";
        return;
    }

    attempts++;

    if (guess === secret) {
        output.textContent = "Congratulations! You guessed the number!";
        document.getElementById('submitGuess').disabled = true;
    } else if (attempts >= 5) {
        output.textContent = `Sorry, you ran out of attempts! The secret number was ${secret}.`;
        document.getElementById('submitGuess').disabled = true;
    } else if (guess < secret) {
        output.textContent = "Your guess is too low. Try again.";
    } else {
        output.textContent = "Your guess is too high. Try again.";
    }
});
