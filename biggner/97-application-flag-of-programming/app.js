var userName = prompt("enter user name");
var users = ["minoo", "mohammad", "kimia", "zarpoosh"];

var loginFlag = false;

for (var i = 0; i < users.length; i++) {
  if (users[i] === userName) {
    loginFlag = true;
  }
}

if (loginFlag) {
  alert("لاگین شدین ");
} else {
  alert("شما ثبت نام نکردید");
}
