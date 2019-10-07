// main.js v0

// Variable definitions

const count = document.getElementById('count');
const time = document.getElementById('time');
const start = document.getElementById('start');
const container = document.getElementById('container');
const question = document.getElementById('question');
const questions = document.getElementById('questions');
const answers = document.getElementById('answers');
// const ans = document.getElementById(ansX);

// Event listeners
start.addEventListener('click', gameStart);

// ans.addEventListener('click', correctAns);
let ansObj = {ans1, ans2, ans3, ans4};
// Function definitions
    
function qAndAGen() {
    let qX = Math.floor((Math.random() * 9) + 1);
    let qY = Math.floor((Math.random() * 9) + 1);
    let aC = qX * qY;
    let aW1 = Math.floor((Math.random() * 9) + 1) * Math.floor((Math.random() * 9) + 1);
    let aW2 = Math.floor((Math.random() * 9) + 1) * Math.floor((Math.random() * 9) + 1);
    let aW3 = Math.floor((Math.random() * 9) + 1) * Math.floor((Math.random() * 9) + 1);

    if (aW1 === aC || aW2 === aC || aW3 === aC) {
        aW1 = Math.floor((Math.random() * 9) + 1) * Math.floor((Math.random() * 9) + 1);
        aW2 = Math.floor((Math.random() * 9) + 1) * Math.floor((Math.random() * 9) + 1);
        aW3 = Math.floor((Math.random() * 9) + 1) * Math.floor((Math.random() * 9) + 1);
    }

    console.log(qX, qY, aC, aW1, aW2, aW3);
}

// Game Over
function gameOver() {
    // Hide #question span
    question.style.display = 'none';
    // Game Over!
    let gameOver = document.createElement('h1');
    let GOText = document.createTextNode('Game Over!');
    gameOver.appendChild(GOText);
    
    // Your score is: ...
    let finalScore = document.createElement('p');
    let FSText = document.createTextNode('Your score is: ');
    finalScore.appendChild(FSText);
        
    // Style Game Over
    gameOver.style.fontFamily = 'var(--pd, serif)';
    gameOver.style.fontSize = '8vh';
    finalScore.style.fontFamily = 'var(--m, serif)';
    finalScore.style.fontSize = '3vh';
    questions.style.backgroundColor = 'hsl(0, 100%, 60%)';

    questions.appendChild(gameOver);
    questions.appendChild(finalScore);
}

function gameStart() {
    // Change start button to reset button
    start.textContent = 'Reset Game';
    start.removeEventListener('click', gameStart);
    start.addEventListener('click', gameReset);
    
    // Start timer
    let t = 60;
    let countdown = setInterval(timer, 1000);
    
    function timer() {
        if (t == -1) {
            clearInterval(countdown);
            gameOver();
        } else {
            time.textContent = t;
            t--;
        }
    }
    
    qAndAGen();
}

function gameReset() {
    location.reload();
}

// Plan:

// Done:
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
        // INCOMPLETE SECTION //
    // When timer runs out:
        // Display 'Game Over' with score count.

// Tasks Left:
        // A question is generated in the #question div (*1)
            // Any question from 1 times 1 to 10 times 10
        // Four answers are also generated in the .ans boxes
            // 3 incorrect answers, 1 correct answer
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