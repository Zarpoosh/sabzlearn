var word = prompt("please write you'r word :");

var characterArray = word.split("");
var reversearray = characterArray.reverse();
var reverseWord = reversearray.join("");
console.log(reverseWord);

if (reversearray === characterArray) {
  alert("از هر دو جهت خوانده میشود");
} else {
  alert("یکی خوانده نمیشود");
}
