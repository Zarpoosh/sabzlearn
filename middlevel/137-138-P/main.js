let $ = document;
let textInput = $.getElementById("input");
let keyBox = $.getElementById("key");
let locationBox = $.getElementById("location");
let typeBox = $.getElementById("type");
let codeBox = $.getElementById("code");
let aski = $.getElementById("aski");
let btn = $.getElementById("btn");
let input = $.getElementById("input");

textInput.addEventListener("keydown", function (event) {
  event.preventDefault();
  keyBox.innerHTML = event.key;
  locationBox.innerHTML = event.location;
  typeBox.innerHTML = event.type;
  aski.innerHTML = event.keyCode;
  codeBox.innerHTML = event.keyCode;

  console.log(event);
});
btn.addEventListener("click", function () {
  keyBox.innerHTML = "";
  locationBox.innerHTML = "";
  typeBox.innerHTML = "";
  aski.innerHTML = "";
  codeBox.innerHTML = "";
  input.value = "";
});
