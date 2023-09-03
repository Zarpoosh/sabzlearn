// convert minutes to hour

var minutes = Number(prompt("write your minutes :"));
var hour = minutes / 60;

if (isNaN(minutes)) {
  alert("it's not true");
} else {
  alert("Hour : " + hour);
}
