const myLeads = [
  "https://www.naver.com",
  "https://www.google.com",
  "https://www.youtube.com",
];
const inputEl = document.getElementById("input-el");
let inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  //inputBtn을 click 했을때 동작은, 다음 코드를 실행한다
  console.log("이벤트 리스너");

  console.log(inputEl.value);
  if (
    inputEl.value !== "" &&
    inputEl.value !== null &&
    inputEl.value !== undefined
  ) {
    myLeads.push(inputEl.value);
  }
  console.log("myLeads:", myLeads);
  console.log("ulEl:", ulEl);
});
for (let i = 0; i < myLeads.length; i++) {
  ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
  // innerHTML 속성으로 <li></li>를 html처럼 구현할 수 있다.
}
//log out the items in the myLeads array using a for loop

// grab tje unordered list and store it in a const variable called ulEl
