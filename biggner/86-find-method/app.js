// find methodes
var users = [
  { id: 1, name: "ali", age: 54 },
  { id: 2, name: "minoo", age: 20 },
  { id: 3, name: "mohammd", age: 30 },
];

var mainuserData = users.find(function (user) {
  return user.name === "ali";
});
console.log(mainuserData);
