const users = [
  { id: 19, name: "minoo", age: 20 },
  { id: 28, name: "kimia", age: 70 },
  { id: 37, name: "maryam", age: 30 },
  { id: 45, name: "romina", age: 60 },
  { id: 53, name: "mohammad", age: 40 },
];

let userCount = users.length;

function islogin(userID) {
  let isUserInUsers = users.some((user) => user.id === userID);
  return isUserInUsers;
}

function userRegister(name, age) {
  let newUserObj = {
    id: Math.floor(Math.random() * 100),
    name: name,
    age: age,
  };

  users.push(newUserObj);
}

export { islogin, userRegister, userCount };
