const myLeads = [];
const inputEl = document.getElementById("input-el");
let inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  if (
    inputEl.value !== "" &&
    inputEl.value !== null &&
    inputEl.value !== undefined
  ) {
    myLeads.push(inputEl.value);
  }

  renderLeads();
  // clear the input field
  clearField();
});

function clearField() {
  document.getElementById("input-el").value = "";
}

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    // listItems +=
    //   "<li><a href='" +
    //   myLeads[i] +
    //   "' target='_blank'>" +
    //   myLeads[i] +
    //   "</a></li>";

    listItems += `<li>
        <a href='${myLeads[i]}' target='_blank'>${myLeads[i]}</a>
      </li>`;

    // a link 새탭에서 열기

    // innerHTML 속성으로 <li></li>를 html처럼 구현할 수 있다.
    // 1. create elements
    // const li = document.createElement("li");
    // 2. set text content
    // li.textContent = myLeads[i];
    // 3. append to ul
    // ulEl.append(li);
  }
  console.log("listItems", listItems);
  ulEl.innerHTML = listItems;
}
