//! ---------------- asynchronous ------------------

// function firstLog() {
//   console.log(1);
//   console.log(2);
// }

// function secondLog() {
//   setTimeout(function () {
//     console.log(3);
//   }, 5000);
// }

// function lastLog() {
//   console.log(4);
//   console.log(5);
// }

// firstLog();
// secondLog();
// lastLog();

//! --------------- synchronous ---------------------

function firstLog() {
  console.log(1);
  console.log(2);
}

function secondLog(callback) {
  setTimeout(function () {
    console.log(3);
    callback();
  }, 5000);
}

function lastLog() {
  console.log(4);
  console.log(5);
}

firstLog();
secondLog(lastLog);
