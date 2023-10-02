let $ = document;
let h1Elem = $.querySelector(".h1");
let inputBox = $.querySelector("#input");
let convertBtn = $.querySelector("#btn1");
let resetBtn = $.querySelector("#btn2");
let swapBtn = $.querySelector("#btn3");
let firstValue = $.querySelector("#C");
let secondValue = $.querySelector("#F");
let result = document.querySelector(".result");

function convert() {
  if (inputBox.value === "") {
    result.innerHTML = "Enter a number";
    result.style.color = "red";
  } else {
    if (firstValue.value === "C") {
      // console.log("farenhight1");
      let farenhight1 = inputBox.value * 1.8 + 32;
      result.innerHTML =
        inputBox.value + " C to " + farenhight1.toFixed(2) + " F ";
      result.style.color = "green";
    } else {
      // console.log("object")
      let farenhight1 = ((inputBox.value - 32) * 5) / 9;
      result.innerHTML =
        inputBox.value + " F to " + farenhight1.toFixed(2) + " C ";
      result.style.color = "green";
    }
  }
}

function reset() {
  inputBox.value = "";
  result.innerHTML = "";
}

function swap() {
  if (firstValue.innerHTML === "C") {
    firstValue.innerHTML = "F";
    secondValue.innerHTML = "C";
    inputBox.setAttribute("placeholder", "F");
    document.title = "F to C";
  } else {
    firstValue.innerHTML = "C";
    secondValue.innerHTML = "F";
    inputBox.setAttribute("placeholder", "C");
    document.title = "C to F";
  }
}

convertBtn.addEventListener("click", convert);
resetBtn.addEventListener("click", reset);
swapBtn.addEventListener("click", swap);
