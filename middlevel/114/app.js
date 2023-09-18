let $= document


let userNameInput = $.getElementById("username");
let passwordInput = $.getElementById("password");
let userMessage = $.querySelector(".userinputValid");
let passMessage = $.querySelector(".passinputValid");

function userNameValidation() {
  if (userNameInput.value.length < 12) {
    userMessage.style.display = "inline";
    userMessage.style.color = "red";
    userMessage.innerHTML = "must contain 12 characters (min)";
  } else {
    userMessage.style.display = "block";
    userMessage.style.color = "green";
    userMessage.innerHTML = "right";
  }
}

function passwordValidation() {
  if (passwordInput.value.length < 8) {
    passMessage.style.display = "inline";
    passMessage.style.color = "red";
    passMessage.innerHTML = "must contain 8 characters (min)";
  } else {
    passMessage.style.display = "block";
    passMessage.style.color = "green";
    passMessage.innerHTML = "right";
  }
}
