let useraNameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let modal = document.querySelector(".modal");
let btn = document.getElementById("btn");

function dataValidation() {
  let userNameValue = useraNameInput.value;
  let passwordValue = passwordInput.value;

  if (userNameValue.length < 12 || passwordValue.length < 8) {
    modal.style.display = "inline";
    modal.style.background = "red";
    modal.innerHTML = "اطلاعات را به درستی وارد کنید";
  } else {
    modal.style.display = "inline";
    modal.style.background = "green";
    modal.innerHTML = "ثبت نام موفقیت آمیز بود";
  }
  console.log(userNameValue, passwordValue);

  setTimeout(function () {
    modal.style.display = "none";
  }, 3000);
}
