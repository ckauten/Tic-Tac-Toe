document.querySelector(".begin").addEventListener("click", startGame);
// Variable declarations
var boxes = document.querySelectorAll(".box");
let boxArr = ["TL", "TM", "TR", "ML", "MM", "MR", "BL", "BM", "BR"];
let beginButton = document.querySelector(".begin");

// Adds event listener to all boxes
boxes.forEach(function (box) {
  box.addEventListener("click", log);
  box.addEventListener("click", place);
});

// Log function definition
function log(event) {
  console.log("Clicked section ID:", event.target.id);
  for (let i = 0; i < boxArr.length; i++) {
    if (event.target.id === boxArr[i]) {
      console.log(i);
    }
  }
}

let winningCombos = [];

//random space picker
function randomSpace() {
  return boxArr[Math.floor(Math.random() * boxArr.length)];
}

//starts the game
function startGame() {
  console.log("the game has started");
  beginButton.classList.toggle("hidden");
  botPlace();
}

//function for placement
function place(event) {
  if (!document.querySelector(`#${event.target.id}`).classList.contains("filled")) {
    const playerIcon = document.createElement("i");
    playerIcon.classList.add("fa-solid", "fa-x");
    event.target.appendChild(playerIcon);
    document.querySelector(`#${event.target.id}`).classList.toggle("filled");
    botPlace();
  }
}

function botPlace() {
  //creates variable based off of bots choice and logs
  var botChoice = randomSpace();
  console.log(botChoice);
  //conditional to check if space is already filled
  if (!document.querySelector(`#${botChoice}`).classList.contains("filled")) {
    //if not, it creates a new icon element and gives it the classes for FA
    const botIcon = document.createElement("i");
    botIcon.classList.add("fa-solid", "fa-o");
    document.querySelector(`#${botChoice}`).appendChild(botIcon);
    document.querySelector(`#${botChoice}`).classList.toggle("filled");
  } else {
    botPlace();
  }
}
