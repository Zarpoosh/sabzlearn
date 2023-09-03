// registeration with object and array and  if else if


var users = [
  { id: 1, name: "minoo", family: "zarpoosh", age: 20 },
  { id: 2, name: "mohamad", family: "rahgoshyi", age: 30 },
  { id: 3, name: "ali", family: "saeid", age: 34 },
];

var name = prompt("enter name:");
var family = prompt("enter family:");
var age = Number(prompt("enter age:"));

if (name.length < 3 || name.length > 10) {
  alert("Please enter right name");
} else if (family.length < 3 || family.length > 15) {
  alert("Please enter right family");
} else if (isNaN(age) || age.length > 4) {
  alert("please enter a valid age");
} else {
  var newuser = {
    id: 4,
    name: name,
    family: family,
    age: age,
  };
  users.push(newuser);
  console.log(users);
}
