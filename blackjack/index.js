"use-strict";

let firstCard = 5;
let secondCard = 7;

let cards = [firstCard, secondCard, thirdCard, fourthCard, fifthCard]; //ordered 된 리스트

let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el"); //querySelector가 더 동적입니다.
let cardsEl = document.getElementById("cards-el");

// create a startGame() that calls renderGame()
function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: " + cards[0] + ", " + cards[1];
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

function newCard() {
  //1. create a card variable as a hard coded number
  let newCard = 3;
  sum += newCard;
  renderGame();
  //2.
}
