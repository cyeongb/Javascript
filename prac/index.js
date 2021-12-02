let hands = ["rock", "scissor", "paper"];

let i = Math.floor(Math.random() * 3);
let j = Math.floor(Math.random() * 3);

function getHand() {
  let hand1 = hands[i];
  let hand2 = hands[j];
  console.log(hand1, hand2);

  if (
    (hand1 === "rock" && hand2 === "rock") ||
    (hand1 === "paper" && hand2 === "paper") ||
    (hand1 === "scissor" && hand2 === "scissor")
  ) {
    console.log("비김!");
  }
}

getHand();
