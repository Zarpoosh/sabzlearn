// //map

// let user = {
//   id: 1,
//   name: "minoo",
//   age: 20,
// };

// //!  its not itreable
// // for(let usr of user){
// //     consoloe.log(usr)
// // }

// let userMap = new Map();

// userMap.set("id", 1);
// userMap.set("name", "minoo");
// userMap.set("age", 20);
// userMap.set("city", "ardabil");

// console.log(userMap, "size befor delete :", userMap.size);

// userMap.delete("age");

// console.log(userMap, "size after delete :", userMap.size);

// console.log(userMap.get("name"));
// console.log(userMap.has("name"));
// console.log(userMap.has("emil"));

// userMap.forEach((prop) => console.log(prop));
// console.log("========================================")
// userMap.forEach((value, key) => console.log(`${key}: ${value}`));

// console.log(userMap.clear());


///TODO------------------------------------------------------------------------
let user = {
  id: 1,
  name: "minoo",
  age: 20,
};

let userMap = new Map(Object.entries(user));


console.log(userMap)