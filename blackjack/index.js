"use-strict";

let firstCard = 5;
let secondCard = 7;

let cards = [firstCard, secondCard];

let sum = 0;
for (i = 0; i < cards.length; i++) {
  sum += cards[i];
}

// let sum = firstCard + secondCard;
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
  cardsEl.textContent = "Cards: ";
  for (let j = 0; j < cards.length; j++) {
    cardsEl.textContent += cards[j] + " , ";
  }
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
  // sumEl.textContent = "Sum:" + sum;
  messageEl.textContent = message;
}

function newCard() {
  let newCard = 3;
  cards.push(newCard);
  sum += newCard;
  renderGame();
}
