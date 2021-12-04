let myLeads = [];
let oldLeads = [];
const inputEl = document.getElementById("input-el");
let inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const leadsStorage = JSON.parse(localStorage.getItem("myLeads"));
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

if (leadsStorage) {
  myLeads = leadsStorage;
  render(myLeads);
}

tabBtn.addEventListener("click", function () {
  getCurrentTab();
});

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  myLeads.push(tab.url);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
}

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    // listItems +=
    //   "<li><a href='" +
    //   myLeads[i] +
    //   "' target='_blank'>" +
    //   myLeads[i] +
    //   "</a></li>";

    listItems += `<li>
        <a href='${leads[i]}' target='_blank'>${leads[i]}</a>
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

inputBtn.addEventListener("click", function (e) {
  if (
    inputEl.value !== "" &&
    inputEl.value !== null &&
    inputEl.value !== undefined
  ) {
    myLeads.push(inputEl.value);
    localStorage.setItem("myLeads", JSON.stringify(myLeads)); //array to string
    //JSON.parse()   //string to aray
    render(myLeads);
  }
  // clear the input field
  clearField();
});

deleteBtn.addEventListener("click", function () {
  let result = confirm("Are you sure delete all?");
  if (result) {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
  }
});

function clearField() {
  document.getElementById("input-el").value = "https://";
}
