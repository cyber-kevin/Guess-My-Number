'use strict';

const generateRandomNumber = () => Math.trunc(Math.random() * 20) + 1;

let secretNumber = generateRandomNumber();
let score = 7;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (score) {

        // When there is no input
        if (!guess) {
            document.querySelector('.message').textContent = '⛔️ Enter a number!';
        }

        // When player wins
        else if (guess === secretNumber) {
            debugger;
            document.querySelector('.message').textContent = '🎉 Correct number!';
            document.querySelector('.number').textContent = guess;
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('body').style.backgroundColor = '#60b347';
            
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
            return;

        }

        // When guess is wrong
        else if (guess != secretNumber) {
            document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
            score--;
        }
    
        document.querySelector('.score').textContent = score;

        // When player loses
        if (score === 0) {
            document.querySelector('.message').textContent = '💥 You lost the game!';
            return;
        }

    }

});

document.querySelector('.again').addEventListener('click', function() {

    // Generate a new secretNumber
    secretNumber = generateRandomNumber();
    // Reset the score variable
    score = 7;
    // Reset the score field
    document.querySelector('.score').textContent = score;
    // Reset the HTML properties
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';

});


