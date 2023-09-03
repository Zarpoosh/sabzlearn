var usernumber1 = Number(prompt("enter a number"));
var usernumber2 = Number(prompt("enter another number"));

if (usernumber1 % 2 === 0) {
  while (usernumber1 < usernumber2) {
    console.log(usernumber1);
    usernumber1 += 2;
  }
} else {
  usernumber1 += 1;
  while (usernumber1 < usernumber2) {
    console.log(usernumber1);
    usernumber1 += 2;
  }
}
