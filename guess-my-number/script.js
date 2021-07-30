'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (className, message) {
    document.querySelector(className).textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // when no input
    if (!guess) {
        displayMessage('.message', '⛔ No Number!');
    }
    // when guess is correct
    else if (guess === secretNumber) {
        displayMessage('.message', '🎉 Correct Number!');
        displayMessage('.number', secretNumber);
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore) {
            highscore = score;
            displayMessage('.highscore', highscore);
        }
    }
    //when guess is wrong
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage('.message', guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            displayMessage('.score', score);
        } else {
            displayMessage('.message', '🤬 You lost the game!');
            displayMessage('.score', 0);
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.guess').value = '';
    displayMessage('.message', 'Start guessing...');
    displayMessage('.number', '?');
    displayMessage('.score', score);
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});