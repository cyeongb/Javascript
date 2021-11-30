let greeting = document.getElementById("prac");

let messages = ["hi", "my", "name", "is", "gambi"];
for (i = 0; i < messages.length; i++) {
  greeting.textContent += messages[i] + "- ";
}
