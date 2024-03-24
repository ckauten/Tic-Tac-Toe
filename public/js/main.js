// Variable declarations
var boxes = document.querySelectorAll(".box");
let boxArr = ["TL", "TM", "TR", "ML", "MM", "MR", "BL", "BM", "BR"];

// Adds event listener to all boxes
boxes.forEach(function (box) {
  box.addEventListener("click", log);
});

// Log function definition
function log(event) {
  console.log("Clicked section ID:", event.target.id);
}
