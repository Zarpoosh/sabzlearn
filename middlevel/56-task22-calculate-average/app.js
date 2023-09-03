// calculate the average while loop

var usernumber = 0;
var sum = 0;
counter = 0;
while (usernumber != -1) {
  sum += usernumber;
  usernumber = Number(prompt("enter the number : "));
  if (usernumber != -1) {
    counter++;
  }
}
// console.log("sum: " + sum);
// console.log("counter: " + counter);
console.log("average: " + sum / counter);
