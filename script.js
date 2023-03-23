'use strict';
let message = document.querySelector('.message');
let score = document.querySelector('.score');
let highScore = document.querySelector('.highscore');
let btnAgain = document.querySelector('.again');
let btnCheck = document.querySelector('.check');

let secretNumber = Math.floor(Math.random() * 20) + 1;
let overAllScore = 20;
let myHighScore = 0;

//sets the message to the user
let setMessage = function (text) {
  return (message.textContent = text);
};

btnCheck.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess && guess !== 0) {
    setMessage('⛔ No number!');
  }
  // If guess is right
  else if (guess === secretNumber && overAllScore > 0) {
    setMessage('🎉 Congrats!');
    document.body.style.backgroundColor = '#1EFC1E';
    document.querySelector('.number').textContent = secretNumber;
    if (myHighScore < overAllScore) {
      myHighScore = overAllScore;
      highScore.textContent = myHighScore;
    } else {
      highScore.textContent = myHighScore;
    }
  } else if (guess !== secretNumber) {
    setMessage(guess < secretNumber ? '📉 Too low!' : 'Too High 📈');
    overAllScore--;
    score.textContent = overAllScore;
    if (overAllScore <= 0) {
      score.textContent = 0;
      setMessage('💥You lost the game!');
      document.body.style.backgroundColor = '#AA0000';
    }
  }
});

btnAgain.addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  overAllScore = 20;
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  setMessage('Start guessing...');
  score.textContent = overAllScore;
});
