// keyword in function
// function sumNumbers(num1, num2) {
//   var result = num1 + num2;
//   return result;
// }

// var sumResult = sumNumbers(3, 4);
// alert("sumResult: " + sumResult);

/////////////////////////////////////////
// Each function has only one return

var number1 = Number(prompt("Enter the first number"));
var number2 = Number(prompt("Enter the second number"));
function showPower(num1, num2) {
  return num1 ** num2;
}

var powerResult = showPower(number1, number2);

alert("powerResult: " + powerResult);
