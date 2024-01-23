const boxElem = document.getElementById("box");
const btnElem = document.getElementById("btn");

// add mouse move handler
function mousMoveHandler() {
  console.log("mouse move");
}
// remove mous move handler
function removeHandler() {
  boxElem.removeEventListener("mousemove", mousMoveHandler);
}

btnElem.addEventListener("click", removeHandler);
boxElem.addEventListener("mousemove", mousMoveHandler);
