secret = Math.floor(Math.random() * 100) + 1;
console.log(secret);

let attempts = 0;

while (attempts < 5 ) {
    let guess = parseInt(prompt("Guess the number between 1 and 100: "));
    console.log(guess);
    if (guess == secret) {
        console.log("Congratulations! You guessed the number!");
        break;
    }
    else if (guess < secret) {
        console.log("Your guess is too low.");
    } else if (guess > secret) {
        console.log("Your guess is too high.");
    }
    else {
        break;
    }
    attempts++;
}

if (attempts == 5) {
    console.log("Sorry, you ran out of attempts! The secret number was " + secret);
}