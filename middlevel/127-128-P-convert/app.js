let h1Elem = document.querySelector(".h1");
let inputBox = document.querySelector("#input");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");

btn1.addEventListener("click", function () {
  //   console.log(inputBox.value);
  let farenhight = inputBox.value * 1.8 + 32;
  console.log(farenhight);
});

btn2.addEventListener("click", function () {
  inputBox.value = "";
});

btn3.addEventListener("click", function () {});
