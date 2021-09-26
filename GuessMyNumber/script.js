"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highscore = 0;

function dispMessage(msg) {
  document.querySelector(".message").textContent = msg;
}
function dispScore(score) {
  document.querySelector(".score").textContent = score;
}
function backgroundColor(color) {
  document.querySelector("body").style.backgroundColor = color;
}
function dispNumber(number) {
  document.querySelector(".number").textContent = number;
}

document.querySelector(".check").addEventListener("click", function () {
  let guessNumber = Number(document.querySelector(".guess").value);

  if (!guessNumber) {
    dispMessage("⛔Invalid!");
  } else if (guessNumber !== secretNumber) {
    dispMessage(guessNumber > secretNumber ? "📈Too high!" : "📉Too low!");
    dispScore(--score);
  } else if (guessNumber === secretNumber) {
    dispMessage("🎉Correct Answer!");
    backgroundColor("lightgreen");
    dispNumber(secretNumber);
    if (score > highscore) {
      document.querySelector(".highscore").textContent = score;
      highscore = score;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  dispScore(score);
  dispMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  backgroundColor("rgb(185, 201, 223)");
  dispNumber("?");
});

const modal = document.querySelector(".modal");
const btn = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const rules = document.querySelector(".rules");

const showModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const hideModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btn.addEventListener("click", hideModal);
rules.addEventListener("click", showModal);

overlay.addEventListener("click", hideModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) hideModal();
});
