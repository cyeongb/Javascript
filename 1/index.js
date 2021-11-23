// 변수는 camelCase
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;
let errorPragraph = document.getElementById("error");

function increment() {
  count += 1;
  countEl.textContent = count;
  console.log(count);
}

//DOM
//Document : html 문서
// Object :  html 에 표현되어있는 elements
// model : javascript로 표현하는 document.
// --> how use javscript to modify a website

function save() {
  let countStr = count + " - ";
  console.log(countStr);
  saveEl.textContent += countStr;

  countEl.textContent = 0;
  count = 0;
  errorPragraph.textContent = "Error, please try again";
}
