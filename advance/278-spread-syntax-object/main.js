//spread syntax

let name = [2, 3, 5];
function sum(a, s, d) {
  console.log("a", a);
  console.log("s", s);
  console.log("d", d);
  return a + s + d;
}

// console.log(sum(2,3,5))
console.log(sum(...name));

//*----------------------  soread objects -----------------------

let user = {
  name: "minoo",
  age: 20,
  id: 1,
};
let newUser = { ...user };
newUser.name = "kimian";

console.log("user", user);
console.log("user", newUser);
