"use strict";

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number! 🎉';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
const message = document.querySelector(".message");
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // No input
  if (!guess) {
    message.textContent = "⛔ No number!";

    // Guess is correct
  } else if (guess === secretNumber) {
    message.textContent = "🎉 Correct Number! 🎉";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // Guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = "📈 Too high...";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "😥 You lost the game";
      document.querySelector(".score").textContent = 0;
    }

    // Guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = "📉 Too low...";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "😥 You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  message.textContent = "Start guessing...";
});
