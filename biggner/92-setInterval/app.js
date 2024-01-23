// setInterval
var i = 10;

var timer = setInterval(function () {
  if (i === 0) {
    alert("game over");
    clearInterval(timer);
  }
  console.log(i);
  i--;
});
