const users = [
  { id: 1, name: "minoo", age: 20 },
  { id: 4, name: "romina", age: 5 },
  { id: 2, name: "maryam", age: 21 },
  { id: 5, name: "zarpoosh ", age: 14 },
  { id: 3, name: "kimia", age: 18 },
];

export let usersCount=users.length;

export function isLogin(userId) {
  let isUserInUsersoosh = users.some((user) => user.id == userId);

  return isUserInUsersoosh;
}

export function userRegister(name, age) {
  let newUserObject = {
    id: Math.floor(Math.random() * 100),
    name: name,
    age: age,
  };

  users.push(newUserObject);
  return users;
}
// export { isLogin , userRegister, usersCount};
