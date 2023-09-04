// the timer task with setinterval and setTimeout
// var number = Number(prompt("enter your number"));

// var timer = setInterval(function () {
//   if (number === 0) {
//     alert("the end");
//     clearInterval(timer);
//   }
//   console.log(number);
//   number--;
// }, 1000);

////////////////////////////////////
var minutes = +prompt("enter minutes");
var second = +prompt("enter second");

var timer = setInterval(function () {
  if (second === 0) {
    minutes--;
    second = 59;
  }
  if (minutes === 0 && second === 0) {
    clearInterval(timer);
  }

  console.log("timer " + minutes + " : " + second);
  second--;
}, 1000);
