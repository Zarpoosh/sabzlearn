// Get the date of birth and get the age

var birthDay = Number(prompt("please write you'r birthday :", 1370));
var userAge = 1402 - birthDay;

if (userAge < 0) {
  alert("تاریخ تولد صحیح نمیباشد.");
} else {
  alert("userBirthDay : " + userAge);
}
