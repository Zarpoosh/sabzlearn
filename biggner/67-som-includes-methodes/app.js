var userdata = [
  { id: 1, name: "minoo", age: 20 },
  { id: 2, name: "mohamad", age: 30 },
  { id: 3, name: "zarpoosh", age: 21 },
];
// console.log(userdata.includes({ id: 1, name: "minoo", age: 20 }));
var isuser = userdata.some(function (user) {
  console.log(user);
  return user.name == "ali";
});
console.log(isuser);
// someبه اولین true که برسه کارش تمومه
// ولی foreach  به ازای تمام عناصر انجام میده
