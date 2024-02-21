//? ASI => automatic semicolon insertion  in js

// let num1=2
// let num2=3
// console.log(num1+num2);
// console.log(num1+num2)

/////////////////////////////////////////////

//!اگه سیمیکالن نزاری میچسبونه به خط پایین  و میشه undefined .و وز آندیفایند نمیه متد مپ اجرا شه
let numbers = [1, 2, 3, 4, 56, 78];

// [("minoo", "mohammad", "zarpoosh", "rehgoshay")].map((name) => console.log(name));

//////////////////////////////////////////////////////////////
const numbers2 = [1, 2, 3, 4, 56, 78];

numbers2.forEach((num) => console.log(num));

(function () {
  console.log("IIFE :))");
})();

//////////////////////////////////////////////////////////////////
const userGenerator = (name, age, job) => {
  return; //علت اجرا نشدن اینه که انجین مرورگر خدش میاد آخر ریترن ;میزاره و آندیفایند میشه
  name;
  // {
  //     name,
  //     age,
  //     job
  // }
};

let userMinoo = userGenerator("minoo", 20, "web developer");

console.log(userMinoo);
///////////////////////////////////////////////////////////////////
let a=2
let b=3+a;
("minoo" +a).toLowerCase()