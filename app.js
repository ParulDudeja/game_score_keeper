"use strict";
const p1 = {
  score: 0,
  button: document.getElementById("btn1"),
  display: document.getElementById("p1-display"),
  winScore: 0,
  winScoreDisplay: document.getElementById("p1-win-counter"),
};

const p2 = {
  score: 0,
  button: document.getElementById("btn2"),
  display: document.getElementById("p2-display"),
  winScore: 0,
  winScoreDisplay: document.getElementById("p2-win-counter"),
};

const btnReset = document.getElementById("reset");
const btnWinnerReset = document.getElementById("winner-reset");
const winningScoreSelect = document.getElementById("play-upto");

let winningScore = 5;
let isGameOver = false;

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      if (isGameOver) {
        player.winScore += 1;
        player.winScoreDisplay.textContent = player.winScore;
      }
      player.display.classList.add("winner");
      opponent.display.classList.add("loser");
      player.button.disabled = true;
      player.button.style.backgroundColor = "#9EF1C5";
      opponent.button.disabled = true;
      opponent.button.style.backgroundColor = "#96FFC7";
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener("click", function () {
  updateScore(p1, p2);
});

p2.button.addEventListener("click", function () {
  updateScore(p2, p1);
});

btnReset.addEventListener("click", reset);
btnWinnerReset.addEventListener("click", winnerReset);

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("winner", "loser");
    p.button.disabled = false;
    p.button.style.backgroundColor = "#2cb36b";
  }
}
function winnerReset() {
  for (let p of [p1, p2]) {
    p.winScore = 0;
    p.winScoreDisplay.textContent = 0;
  }
}
