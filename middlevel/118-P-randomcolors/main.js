// console.log(document.body)

// let colorsArray = ["red", "green", "blue", "black", "yellow", "pink"];
// let randomColorIndex;

// setInterval(function () {
//   randomColorIndex = Math.floor(Math.random() * colorsArray.length);
//   document.body.style.backgroundColor = colorsArray[randomColorIndex];
// }, 2000);
//////////////////////// second way//////////////////////////////////////

// random rgb colors
let redValue, greenValue, blueValue;

setInterval(function () {
  redValue = Math.floor(Math.random() * 255);
  greenValue = Math.floor(Math.random() * 255);
  blueValue = Math.floor(Math.random() * 255);

  document.body.style.backgroundColor =
    "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
}, 2000);
