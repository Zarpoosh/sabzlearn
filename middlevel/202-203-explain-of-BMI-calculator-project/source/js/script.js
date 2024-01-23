const $ = document;
const weightInput = $.querySelector("#weight");
const heightInput = $.querySelector("#height");
const weightVal = $.querySelector("#weight-val");
const heightVal = $.querySelector("#height-val");
const bmiResult = $.querySelector("#result");
const category = $.querySelector("#category");

function bmiCalculator() {
  let weight = weightInput.value;
  let height = heightInput.value;

  weightVal.innerHTML = weight;
  heightVal.innerHTML = height;

  let result = (weight / Math.pow(height / 100, 2)).toFixed(1);
  bmiResult.innerHTML = result;

  if (result < 18.5) {
    category.innerHTML = "Under weight";
    bmiResult.style.color = "yellow";
  } else if (result >= 18.5 && result <= 24.9) {
    category.innerHTML = "Nornal";
    bmiResult.style.color = "green";
  } else if (result > 25 && result < 29.9) {
    category.innerHTML = "Over weight";
    bmiResult.style.color = "orange";
  } else {
    category.innerHTML = "fat";
    bmiResult.style.color = "red";
  }
}

weightInput.addEventListener("input", bmiCalculator);
heightInput.addEventListener("input", bmiCalculator);
