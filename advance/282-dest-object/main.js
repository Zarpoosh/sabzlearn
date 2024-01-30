//object dest

let user = {
  id: 1,
  name: "minoo",
  age: 20,
};

//! its wrong
// let id=user.id
// let name=user.name
// let age=user.age

//* فرقی نداره با چه ترتیبی بزاریم / حتما هم سام با پراپرتی های ابجکت باشه
//?میتونیم با : اسم متغیر مونو تغییر بدیم
let { id: userId, name = "zarpoosh", age } = user;

console.log(userId);
console.log(name);
console.log(age);

//----------------------------------------------------------------

let users = [
  { id: 1, name: "minoo", age: 20, city: "ardabil" },
  { id: 2, name: "mohammad", age: 34, city: "tabriz" },
  { id: 3, name: "kimia", age: 12, city: "tehran" },
  { id: 4, name: "maryam", age: 43, city: "esfahan" },
];
const getUser = (userID) => {
  let mainUser = users.find((user) => user.id === userID);

  return mainUser;
};

console.log(getUser(3));
