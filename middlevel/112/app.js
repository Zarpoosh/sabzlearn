let userNameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let userSpan = document.querySelector(".userinputValid");
let passSpan = document.querySelector(".passinputValid");

function userValidation() {
  if (userNameInput.value.length < 12) {
    userSpan.style.display = "inline";
    userSpan.innerHTML = "must contain 12character (min)";
    userSpan.style.color = "red";
  } else {
    userSpan.style.display = "block";
    userSpan.style.color = "green";
    userSpan.innerHTML = "right";
  }
}

function passValidation() {
  if (passwordInput.value.length < 8) {
    passSpan.style.display = "inline";
    passSpan.innerHTML = "must contain 8 characters (min)";
    passSpan.style.color = "red";
  } else {
    passSpan.style.display = "block";
    passSpan.style.color = "green";
    passSpan.innerHTML = "right";
  }
}
