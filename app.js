const divs = document.querySelectorAll("#grid div");
const mole = document.querySelector(".mole");
const scoreDisplay = document.getElementById("score");
let score = 0;
let randomPosition;

function showMole() {
  divs.forEach((div) => {
    div.classList.remove("mole");
  });

  randomPosition = Math.floor(Math.random() * 9);
  divs[randomPosition].classList.add("mole");
}

divs.forEach((div) => {
  div.addEventListener("mousedown", () => {
    if (div.className === "mole") {
      score++;
      scoreDisplay.innerText = score;
    }
  });
});

function moveMole() {
  let timerId = null;
  timerId = setInterval(showMole, 500);
}

moveMole();
