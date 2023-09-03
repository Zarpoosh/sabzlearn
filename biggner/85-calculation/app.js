var num1 = prompt("enter your first number : ");
var num2 = prompt("enter your second number :");
var userOperator = prompt(
  "choose your operator : \n 1. + \n 2. - \n 3. * \n 4. % \n 5. ** "
);

if (userOperator == "1") {
  alert(num1 + num2);
} else if (userOperator == "2") {
  alert(num1 - num2);
} else if (userOperator == "3") {
  alert(num1 * num2);
} else if (userOperator == "4") {
  alert(num1 % num2);
} else if (userOperator == "5") {
  alert(num1 ** num2);
} else {
  alert("choose the right operator");
}
