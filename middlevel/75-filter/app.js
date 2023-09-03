// var scors = [18, 19, 16, 20, 14, 12];
// var result = scors.filter(function (scor) {
//   return scor > 18;
// });
// console.log(result);

var userNames = ["minoo", "ali", "mohamad", "roz", "romina"];
var filterdUserNames = userNames.filter(function (usernames) {
  return usernames.length > 3;
});
console.log(filterdUserNames);
