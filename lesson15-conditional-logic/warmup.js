// Prompt the user for their age
// let age = prompt("Please enter your age:");

// Check if the user is eligible to vote. If the user is 18 or older, display "You are eligible to vote!". 
// Otherwise, display "You are not eligible to vote yet."

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
//   readline.question("Please enter your age: ", (age) => {
//     if (age >= 18) {
//         console.log("You are eligible to vote!");
//     } else {
//         console.log("You are not eligible to vote yet.");
//     }
//     readline.close();
//   });


// Prompt the user for a number

// Check if the number is positive, negative, or zero. If the number is positive, display "The number is positive.". 
// If the number is negative, display "The number is negative.". If the number is zero, display "The number is zero."

// readline.question("Please enter a number: ", (num) => {
//     if (num === 0) {
//         console.log("The number is zero.");
//     } else if (num % 2 === 0) {
//         console.log("The number is positive.");
//     } else console.log("The number is negative.");
//     readline.close();
//   });

let number;

const guessNumber = () => {
    if (!number) number = Math.floor(Math.random() * 100);

    readline.question("Guess a number between 1 and 100: ", (guess) => {
        guess = parseInt(guess);

        if (guess === number) {
            console.log("Congrats! You guessed the correct number! Lucky you.");
        } else if (guess > number) {
            console.log("Your guess is too high. Please try again.")
            guessNumber(guess);
        } else {
            console.log("Your guess is too low. Please try again.")
            guessNumber(guess);

        };
    });
};

guessNumber(number);

// Prompt the user to guess a number between 1 and 100. If the user's guess is correct, display "Congratulations! 
// You guessed the correct number!". If the user's guess is too high, display "Your guess is too high. Please try again.". 
// If the user's guess is too low, display "Your guess is too low. Please try again."
