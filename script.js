const messages = ["Yes", "NO", "Maybe", "Probably", "Perfect!"];

const inputEl = document.getElementById("input");

function getEightBallMessage() {
  const messageSize = messages.length;
  const randomIndex = Math.floor(Math.random() * messageSize);
  let fortuneStr = messages[randomIndex];

  return fortuneStr;
}
function changeMessage() {
  const eightEl = document.getElementById("eight");
  const answerEl = document.getElementById("answer");
  const randomFortune = getEightBallMessage();

  if (inputEl.value === "") {
    alert("😎 please ask a question!");
  } else {
    eightEl.textContent = "";
    answerEl.textContent = randomFortune;
  }
  console.log(inputEl.value);
}

const buttonEl = document.getElementById("button");
buttonEl.addEventListener("click", changeMessage);
