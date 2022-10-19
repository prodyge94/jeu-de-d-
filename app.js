// recuperation du DOM
const rolls = document.getElementById("rolls");
const hold = document.getElementById("hold");
const reset = document.getElementById("new");
const round1 = document.getElementById("round1");
const round2 = document.getElementById("round2");
const score2 = document.getElementById("globalscore2");
const score1 = document.getElementById("globalscore1");
const joueur1 = document.querySelector(".etat1");
const joueur2 = document.querySelector(".etat2");
const winner1 = document.querySelector(".win1");
const winner2 = document.querySelector(".win2");
const tourner = document.getElementById("tourne");

//initialisation de quelque variable
let currentpoint = 0;
let global1 = 0;
let global2 = 0;
// fonction a utiliser
function newGame() {
  round1.innerHTML = 0;
  round2.innerHTML = 0;
  score1.innerHTML = 0;
  score2.innerHTML = 0;
  joueur1.classList.remove("passif");
  joueur2.classList.remove("passif");
  joueur2.classList.add("passif");
  currentpoint = 0;
  global1 = 0;
  global2 = 0;
  winner1.classList.add("passif");
  winner2.classList.add("passif");
}

function switchPlayer() {
  joueur1.classList.toggle("passif");
  joueur2.classList.toggle("passif");
}

function entierAleatoire(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function spin() {
  function rollDice() {
    document.getElementById("dice").className =
      "bi bi-dice-" + random + "-fill";
  }
  let random = this.entierAleatoire(1, 6);
  if (random == 1) {
    currentpoint = 0;
    switchPlayer();
    round1.innerHTML = 0;
    round2.innerHTML = 0;
    rollDice();
  } else {
    currentpoint = currentpoint + random;

    console.log(currentpoint);
    rollDice();
  }
}
function winner() {
  if (global1 >= 100) {
    winner1.classList.remove("passif");
  }
  if (global2 >= 100) {
    winner2.classList.remove("passif");
  }
}
function take() {
  if (joueur1.classList.contains("passif")) {
    global2 = global2 + currentpoint;
    score2.innerHTML = global2;
    round2.innerHTML = 0;
  }
  if (joueur2.classList.contains("passif")) {
    global1 = global1 + currentpoint;
    score1.innerHTML = global1;
    round1.innerHTML = 0;
  }
  currentpoint = 0;
  switchPlayer();
}
// les events ou on utilise les fonctions
rolls.addEventListener("click", () => {
  if (global1 < 100 && global2 < 100) {
    spin();
  }
  if (joueur1.classList.contains("passif")) {
    round2.innerHTML = currentpoint;
  }
  if (joueur2.classList.contains("passif")) {
    round1.innerHTML = currentpoint;
  }
});
hold.addEventListener("click", () => {
  if (global1 < 100 && global2 < 100) {
    take();
  }

  winner();
});
reset.addEventListener("click", () => {
  newGame();
});
