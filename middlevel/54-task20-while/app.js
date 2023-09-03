// Plus the number of digits in the number. 
// write the number of digits in the number.

var usernumber = Number(prompt("enter your number : ", 0));
var sum = 0;
var counter = 0;
while (usernumber / 10 != 0) {
  sum = sum + (usernumber % 10);
  counter++;
  usernumber = Math.floor(usernumber / 10);
}

alert("sum of digits is : " + sum + "\n" + "counter is : " + counter);
