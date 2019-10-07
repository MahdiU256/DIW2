// main.js v0

// Variable definitions

const count = 0;
const time = 60;
const start = document.getElementById('start');
const ans = document.getElementsByClassName('ans');
const ansX = document.getElementById('ans' + ranNum);

// Plan:

// Page Loads
// Q: Has the game begun?
    // If No:
        // Click 'Start Game'
        // Follow the steps from 'If Yes:'
    // If Yes: 
        // Play the game until Game Over (Refer to Game Logic)
        // Click 'Reset Game'
        // Window reloads
        // Back to beginning

// Game Logic
// The game begins:
    // #start div content changes from 'Start Game' to 'Reset Game'
    // Timer starts counting down from 60 to 0
    // A question is generated in the #question div (*1)
        // Any question from 1 times 1 to 10 times 10
    // Four answers are also generated in the .ans boxes
        // 3 incorrect answers, 1 correct answers
    // User clicks on an answer:
        // If answer is correct:
            // +1 to score count
            // #correct div is visible for 1 second
            // A new question is generated 
            // Repeat process from *1
        // If answer is incorrect: 
            // +0 to score count
            // #wrong div is visible for 1 second
            // A new question is generated 
            // Repeat process from *1
    // When timer runs out:
        // Display 'Game Over' with score count, telling user to click 'Reset Game' to try again.
