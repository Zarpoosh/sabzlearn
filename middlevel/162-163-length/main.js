let inputBox = document.querySelector("input");
let spanTag = document.querySelector(".counter");

let inputMaxLength = inputBox.getAttribute("maxlength");
console.log(inputMaxLength);

inputBox.addEventListener("keyup", function () {
  spanTag.innerHTML = inputMaxLength - inputBox.value.length;
});
