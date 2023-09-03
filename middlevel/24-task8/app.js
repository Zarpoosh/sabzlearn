var age = Number(prompt("write your age"));
var genedr = prompt("write your genedr");

// user cant sign in if age <18 or genedr == "female"
if (age < 18 || genedr == "female") {
  alert("error! you cant sign in");
} else {
  alert("you can sign in");
}
