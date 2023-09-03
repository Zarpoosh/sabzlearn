var userName = prompt("enter user name: ");
var users = ["minoo", "mohamad", "kimia", "ali"];
var islogin = users.includes(userName);
if (islogin == true) {
  console.log("successfuly");
} else {
  console.log("wrong");
}

// var numbers = [2, 3, 45, 6, 7];
// var result = numbers.includes(45 ,2);
// console.log(result);
