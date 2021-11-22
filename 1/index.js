// 변수는 camelCase
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
  console.log(count);
}

//DOM
//Document : html 문서
// Object :  html 에 표현되어있는 elements
// model : javascript로 표현하는 document.
// --> how use javscript to modify a website

function save() {
  console.log(count);
}

save();
