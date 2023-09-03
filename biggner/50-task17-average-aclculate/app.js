// calculate the average of 5 numbers

// first way
var allplus = 0;
for (var i = 0; i < 5; i++) {
  allplus = allplus + Number(prompt("enter oyur number :"));
  var result = allplus / 5;
}
alert(result);

// second way
var sum = 0;
var usernumber = null;
for (var i = 0; i < 5; i++) {
  usernumber = usernumber + Number(prompt("enter the" + (i + 1) + " number :"));
  sum = sum + usernumber;
}
console.log("average" + sum / 5);
