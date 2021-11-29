"use-strict";

// 1. create two variables firstcard and secondcard

let firstCard = 10;
let secondCard = 9;
let sum = firstCard + secondCard;
// 2. set their values to a random number between 2~11
let hasBlackJack = false;
let isAlive = true;
//3. create a variable sum, and set it to the sum of two card
let message = "";
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el"); //querySelector가 더 동적입니다.

let cardsEl = document.getElementById("cards-el");

function startGame() {
  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "black jack!";
    hasBlackJack = true;
  } else {
    message = "game over";
    isAlive = false;
  }
  sumEl.textContent = "Sum:" + sum;
  messageEl.textContent = message;
}
