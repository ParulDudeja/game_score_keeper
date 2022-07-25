// "use strict";
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const p1Display = document.getElementById("p1-display");
const p2Display = document.getElementById("p2-display");
const btnReset = document.getElementById("reset");

let p1Score = 0;
let p2Score = 0;
let winningScore;

btn1.addEventListener("click", function () {
  p1Score += 1;
  p1Display.textContent = p1Score;
  //   console.log("btn 1 clicked");
});
btn2.addEventListener("click", function () {
  p2Score += 1;
  p2Display.textContent = p2Score;
  //   console.log("btn 2 clicked");
});
btnReset.addEventListener("click", function () {
  p1Score.textContent = 0;
  p2Score.textContent = 0;
});
