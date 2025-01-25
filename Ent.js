const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let number = Math.floor(Math.random() * 100) + 1;
let guess;
let attempts = 0;

function checkGuess() {
    attempts++;
    if (guess < number) {
        console.log("Too low!");
    } else if (guess > number) {
        console.log("Too high!");
    } else {
        console.log(`You guessed it in ${attempts} attempts!`);
        readline.close();
    }
}


readline.question("I'm thinking of a number between 1 and 100. What's your guess? ", (input) => {
    guess = parseInt(input);
    if (isNaN(guess)) {
        console.log("Invalid input. Please enter a number.");
    } else {
        checkGuess();
    }
});

readline.on('line', (input) => {
    guess = parseInt(input);
    if (isNaN(guess)) {
        console.log("Invalid input. Please enter a number.");
    } else {
        checkGuess();
    }
});
