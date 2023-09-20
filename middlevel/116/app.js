let h1Elem = document.querySelector(".title");

// first way to set onclick event
// h1Elem.addEventListener("click", function () {
//   console.log("clicked");
// });

// second way to set onclick event
// () in front of the function because it is executed by itself
h1Elem.addEventListener("click", clickEvent);
function clickEvent() {
  console.log("clicked");
}
