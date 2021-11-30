"use-strict";

let cards = [];
let sum = 0;

// let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el"); //querySelector가 더 동적입니다.
let cardsEl = document.getElementById("cards-el");

// create a startGame() that calls renderGame()
function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();

  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

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
  if (isAlive && !hasBlackJack) {
    let newCard = getRandomCard();
    cards.push(newCard);
    sum += newCard;
    renderGame();
  }
}

function getRandomCard() {
  // random() * n 하면 0에서 n미만의 숫자를 도출할 수 있습니다.
  let randomCard = Math.floor(Math.random() * 13) + 1;
  return randomCard;
}
