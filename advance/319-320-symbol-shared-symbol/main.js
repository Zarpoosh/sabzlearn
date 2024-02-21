// symbol
let symbol1 = Symbol("symbol1");
let symbol2 = Symbol("useridsymbol");
let symbol3 = Symbol("userID");
let symbol4 = Symbol("userID");

console.log(symbol1);
console.log(symbol2);
console.log(symbol3);
console.log(symbol4);

// نیازی به کلمه کلیدیnew  نیس
console.log(symbol1 === symbol2); ////?  سیمبل زمانی استفاده میشه که بخوایم یه مقدار یونیک داشته باشیم.. و به مقدارشون دسترسی نداریم
console.log(symbol3 === symbol4);
console.log(typeof symbol1);

//----------------------------------------------------------------------------
//TODO shared symbol ==> for()
//symbollike object is refrence type

let userIDsymbol = Symbol.for("user ID");
let userObject = {
  id: 1,
  username: "minoo",
  age: 20,
  [userIDsymbol]: "1`287-jsdnjd",
};

// console.log(userObject)
console.log(userObject[Symbol.for("user ID")])
console.log(userObject ===Symbol.for("user ID"))


for (let item in userObject) {
  console.log(item);
}
