let logBtn = document.getElementById("btn");
let userNameInput = document.getElementById("username");

// target : elementرو میده که روش  رویداد رخ داده .
logBtn.addEventListener("click", function (event) {
  // console.log(event.target);
  console.log(event);
});

userNameInput.addEventListener("keydown", function (event) {
  // console.log(event.target);
  console.log(event.key);
  // console.log(event);
  // event.key === "Enter" ? alert("enter clicked") : alert("its not enter");
});
