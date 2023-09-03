var usernumber = [];

var usernumber = 0;
var sum = 0;

while (usernumber != -1) {
  usernumber = Number(
    prompt("enter the number : \n enter -1 if you dont enter any number .")
  );
  if ((usernumber = !-1)) {
    usernumber.push(usernumber);
  }
}

for (var i = 0; i < usernumber.length; i++) {
  sum += usernumber[i];
}
alert("average :usernumber" + sum / usernumber.length);
