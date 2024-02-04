// for in 

let user = {
  id: 1,
  name: "minoo",
  age: 20,
};

for (let item in user) {
  console.log(`user.${item}: ${user[item]}`)
}