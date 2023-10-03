let loginForm = document.getElementById("loginform");

let userNameInput = document.getElementById("username");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event);
});

userNameInput.addEventListener("keydown", function (event) {
  event.preventDefault();
  console.log(event);
});
