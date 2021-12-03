let cont = document.getElementById("container");

cont.innerHTML = "<button onClick='buy()'>BUY!</button>";

function buy() {
  cont.addEventListener("click", function () {
    cont.innerHTML += "<p>Thank you </p>";
  });
}
