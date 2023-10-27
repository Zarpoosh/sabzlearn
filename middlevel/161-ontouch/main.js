const text = document.getElementById("paragraph");

text.addEventListener("touchstart", function () {
  console.log("touch started");
  text.style.color = "red";
});

text.addEventListener("touchend", function () {
  console.log("touch end");
  text.style.color = "black ";
});

text.addEventListener("touchmove", function () {
  console.log("touch moved");
  text.style.color = "green";
});

text.addEventListener("touchcancel", function () {
  console.log("touchcancelled");
  text.style.color = "blue";
});
