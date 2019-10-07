// main.js v0

// Variable definitions

const count = document.getElementById('count');
const time = document.getElementById('time');
const start = document.getElementById('start');
const container = document.getElementById('container');
const question = document.getElementById('question');
const questions = document.getElementById('questions');
const answers = document.getElementById('answers');
const qX = Math.floor((Math.random() * 9) + 1);
const qY = Math.floor((Math.random() * 9) + 1);
const ans = document.getElementsByClassName('ans');
const ansX = document.getElementById('ans' + ranNum);

// Event listeners
(start.textContent == 'Start Game') ? start.addEventListener('click', gameStart): start.addEventListener('click', gameReset);

ans.addEventListener('click', correctAns);

// Function definitions

function timer(t) {
    t = 60;
    while (t > 0) {
        t--;
        time.textContent = t;
    }
}

function gameStart() {
    // Change start button to reset button
    start.innerText('Reset Game');

    // Start timer
    let countdown = setInterval(timer, 1000);

    // Generate question
    question.textContent = qX + ' x ' + qY;

    // Generate answers
    aGen();

    // Check if answer is correct
    correctAns();

    if (count.textContent == '0') {
        // Stop timer
        clearInterval(countdown);

        // Hide #question span
        questions.style.display = 'none';

        // Create Game Over
        let gameOver = document.createElement('h1');
        let GOText = document.createTextNode('Game Over');
        gameOver.appendChild(GOText);

        let finalScore = document.createElement('p');
        let FSText = document.createTextNode('Your score is: ' + count);
        finalScore.appendChild(FSText);

        let gDiv = document.createElement('div');
        gDiv.appendChild(gameOver);
        gDiv.appendChild(finalScore);

        // Style Game Over
        gameOver.style.fontSize = '4vh';
        finalScore.style.fontSize = '2vh';
        gDiv.style.backgroundColor = '#df2222';
        gDiv.style.width = '90%';
        
        // Place Game Over in the DOM
        container.insertBefore(gDiv, answers);
    }
}

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
