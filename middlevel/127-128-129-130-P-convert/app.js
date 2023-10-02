let $ = document;
let h1Elem = $.querySelector(".h1");
let inputBox = $.querySelector("#input");
let convertBtn = $.querySelector("#btn1");
let resetBtn = $.querySelector("#btn2");
let swapBtn = $.querySelector("#btn3");
let firstValue = $.querySelector("#C"); // // ==> span not Value
let secondValue = $.querySelector("#F");
let result = document.querySelector(".result"); //مینو  هستی اره

function convert() {
  if (inputBox.value === "") {
    result.innerHTML = "Enter a number";
    result.style.color = "red";
    console.log("1=> if  fun convert");
  } else {
    console.log("1=> else  fun convert"); //
    console.log(firstValue.value, "firstValue"); // Element Span not value underStand   ==>  undefined  <==
    console.log(firstValue.innerHTML, "firstValue"); // Element Span not value underStand ===> span is it innerHtml <span >innerHtml not value  not in  input</span>   ==>   undefind  <==
    // inputBox.innerHTML  ==> <input  value=""  type=""  placeHolder=""  />
    // bug fixFinsh

    if (firstValue.innerHTML === "C") {
      let resultValue = inputBox.value * 1.8 + 32;
      result.innerHTML =
        inputBox.value + " C to " + resultValue.toFixed(2) + " F ";
      result.style.color = "green";
    } else {
      let resultValue = ((inputBox.value - 32) * 5) / 9;
      result.innerHTML =
        inputBox.value + " F to " + resultValue.toFixed(2) + " C ";
      result.style.color = "green";
    }
  }
}

function reset() {
  console.log("1=> if  fun rest");
  inputBox.value = "";
  result.innerHTML = "";
}

function swap() {
  if (inputBox.placeholder === "C") {
    firstValue.innerHTML = "F";
    secondValue.innerHTML = "C";
    inputBox.setAttribute("placeholder", "F");
    document.title = "F to C";
    console.log("1=> if F to C");
  } else {
    firstValue.innerHTML = "C";
    secondValue.innerHTML = "F";
    inputBox.setAttribute("placeholder", "C");
    document.title = "C to F";
    console.log("1=> else  C to F");
  }
}

convertBtn.addEventListener("click", convert);
resetBtn.addEventListener("click", reset);
swapBtn.addEventListener("click", swap);
