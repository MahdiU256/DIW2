// main.js

// Variable definitions

// Selectors
const count = document.getElementById('count');
const time = document.getElementById('time');
const start = document.getElementById('start');
const correct = document.getElementById('correct');
const wrong = document.getElementById('wrong');
const question = document.getElementById('question');
const questions = document.getElementById('questions');
const answers = document.getElementById('answers');
const ans1 = document.getElementById('ans1');
const ans2 = document.getElementById('ans2');
const ans3 = document.getElementById('ans3');
const ans4 = document.getElementById('ans4');

// Numbers

// Questions
let qX = Math.floor((Math.random() * 9) + 1);
let qY = Math.floor((Math.random() * 9) + 1);
// Correct answer
let aC = qX * qY;
// Wrong answers
let aW1 = Math.floor((Math.random() * 9) + 1) * Math.floor((Math.random() * 9) + 1);
let aW2 = Math.floor((Math.random() * 9) + 1) * Math.floor((Math.random() * 9) + 1);
let aW3 = Math.floor((Math.random() * 9) + 1) * Math.floor((Math.random() * 9) + 1);
// Score
let score = 0;

// Event listeners
start.addEventListener('click', gameStart);

// Function definitions

// Question and Answer generator
    
function qAndAGen() {
    qX = Math.floor((Math.random() * 9) + 1);
    qY = Math.floor((Math.random() * 9) + 1);
    aC = qX * qY;
    aW1 = Math.floor((Math.random() * 9) + 1) * Math.floor((Math.random() * 9) + 1);
    aW2 = Math.floor((Math.random() * 9) + 1) * Math.floor((Math.random() * 9) + 1);
    aW3 = Math.floor((Math.random() * 9) + 1) * Math.floor((Math.random() * 9) + 1);
    // Show question
    question.textContent = qX + ' x ' + qY;

    // If wrong answer(s) = right answer, generate a new number.
    if (aW1 === aC || aW2 === aC || aW3 === aC) {
        aW1 = Math.floor((Math.random() * 9) + 1) * Math.floor((Math.random() * 9) + 1);
        aW2 = Math.floor((Math.random() * 9) + 1) * Math.floor((Math.random() * 9) + 1);
        aW3 = Math.floor((Math.random() * 9) + 1) * Math.floor((Math.random() * 9) + 1);
    }

    // Generate random index (to select where the correct answer goes)
    let rIndex = Math.floor(Math.random() * 4);

    if (rIndex === 0) { 
        ans1.textContent = aC;
        ans2.textContent = aW1;
        ans3.textContent = aW2;
        ans4.textContent = aW3;
    } else if (rIndex === 1) {
        ans1.textContent = aW1;
        ans2.textContent = aC;
        ans3.textContent = aW2;
        ans4.textContent = aW3;
    } else if (rIndex === 2) {
        ans1.textContent = aW1;
        ans2.textContent = aW2;
        ans3.textContent = aC;
        ans4.textContent = aW3;
    } else if (rIndex === 3) {
        ans1.textContent = aW1;
        ans2.textContent = aW2;
        ans3.textContent = aW3;
        ans4.textContent = aC;
    }

    // Add event listener to check answers
    answers.addEventListener('click', correctAns);
}

// Answer checker
function correctAns(e) {
    console.log(e);
    let evTrig = e.target.textContent;
    if (evTrig == aC) {
        // Score +1
        score++;
        count.textContent = score;
        console.log(score);
        
        // #correct div is visible for 1 second
        correct.style.visibility = 'visible';
        setTimeout(function() { correct.style.visibility = 'hidden'; }, 1000)
    
        // Remove the event listener
        answers.removeEventListener('click', correctAns);

        // run Q&A generator again
        qAndAGen();
    } else {
        // #wrong div is visible for 1 second
        wrong.style.visibility = 'visible';
        setTimeout(function() { wrong.style.visibility = 'hidden'; }, 1000);
        
        // Remove the event listener
        answers.removeEventListener('click', correctAns);

        // run Q&A generator again
        qAndAGen();
    }
}

// Game Over
function gameOver() {
    // Hide #question span
    question.style.display = 'none';

    // Remove event listener
    answers.removeEventListener('click', correctAns);

    // Game Over!
    let gameOver = document.createElement('h1');
    let GOText = document.createTextNode('Game Over!');
    gameOver.appendChild(GOText);
    
    // Your score is: ...
    let finalScore = document.createElement('p');
    let FSText = document.createTextNode('Your score is: ' + count.textContent + '!');
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

// Main game function
function gameStart() {
    // Change start button to reset button
    start.textContent = 'Reset Game';
    start.removeEventListener('click', gameStart);
    start.addEventListener('click', gameReset);    

    // Start timer
    let t = 59;
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

// Reset the Game
function gameReset() {
    location.reload();
}

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
    // When timer runs out:
        // Display 'Game Over' with score count.

// GAME FUNCTIONALITY COMPLETE -> main.js v1.0.0