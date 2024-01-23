//! HOF --> Higher Order Function
//? 1- تابعی که تابع دیگر را به عنوان وروردی بگیرد  ==> hofExp is HOF
//? 2- تابعی که تابعی رو به عنوان خروجی return کنه

function hofExp() {
  return function () {
    console.log("im a inner function");
  };
}

// console.log(hofExp())
// hofExp()()

//TODO --------------------other way-----------------

let hofInner = hofExp(); //این خودش تابعه .برای دیدن نتیجه اش بابید فراخوانیش کنیم
console.log(hofInner);
hofInner();

// other example
let numbers = [1, 2, 3, 4, 5];
numbers.map(function () {});
