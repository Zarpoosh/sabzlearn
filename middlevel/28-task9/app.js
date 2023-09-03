// Get the average and determine the level

var average = Number(prompt("write your average :"));

// else if
// if (18 < average && average < 20) {
//   alert("A");
// } else if (15 < average && average < 17) {
//   alert("B");
// } else if (12 < average && average < 14) {
//   alert("C");
// } else if (average < 12) {
//   alert("conditionally");
// } else {
//   alert("incorrect");
// }

// switch case
switch (average) {
  case 18:
  case 19:
  case 20:
    alert("A");
    break;
  case 15:
  case 16:
  case 17:
    alert("B");
    break;
  case 12:
  case 13:
  case 14:
    alert("c");
    break;
  default:
    alert("conditionally");
}

// ===  => in switch case
