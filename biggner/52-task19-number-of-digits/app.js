var number = Number(prompt("enter your number:"));
var conter = 0;

if (number == 0) {
  conter = 1;
} else {
  for (var i = 0; number / 10 != 0; i++) {
    conter++;
    number = Math.floor(number / 10);
  }
}
alert("count of digits :" + conter);
