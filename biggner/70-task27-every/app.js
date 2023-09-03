var users = [
  { id: 1, name: "minoo", age: 20 },
  { id: 2, name: "mohamad", age: 30 },
  { id: 3, name: "zarpoosh", age: 23 },
  { id: 4, name: "rahgoshayi", age: 43 },
  { id: 5, name: "victor", age: 76 },
];
var isAll = users.every(function (users) {
  return users.age > 18;
});
if (isAll === true) {
  console.log("you can attend in meet");
} else {
  console.log("you can't attend");
}
