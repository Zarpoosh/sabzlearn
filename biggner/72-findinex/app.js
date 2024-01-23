// findindex method in array

var users = ["minoo", "mohamad", "ali", "kimia"];
var userindex = users.findIndex(function (user) {
  console.log(user);
  return user == "minoo";
});
console.log(userindex);
