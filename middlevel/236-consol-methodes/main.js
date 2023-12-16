num1 = 2;
num2 = 3;

// console.log(num1, num2);

// console.error("data is not defined");

console.info("api response status is 404");

console.warn("api response status is 404");

// اگه غلط باشه نشون میده درصورتی که درست باشه هیچی نشون نمیده
console.assert(num1 > num2, "big");
console.assert(num1 + num2 < 10, "big");
// ---------------------------------------------------------------]

// the bestmethod
const user = {
  id: 1,
  name: "minoo",
  age: 20,
  pass: "nhgxtgj",
};
console.table(user);

// const product = [
//   { id: 1, name: "laptopb", price: 29900 },
//   { id: 2, name: "phone", price: 32300 },
//   { id: 3, name: "handsfere", price: 120000 },
//   { id: 4, name: "ssd card", price: 76000 },
// ];
// console.table(product);

// ------------------------------------------------------------

// بستگی به رم و مغز کامپیوتر و....
console.time("For loop")
for(let i = 0; i <1000; i++){
}
console.timeEnd("For loop");
// --------------------------------------------

console.log("قبل از گروه-ابتدا")

console.group("first logs")
console.log("1 log")
console.log("2 log")
console.log("3 log")
console.groupEnd("first logs")

console.log("بعد از گروه-انتها")
// --------------------------------------------

//  %c , %s ,\$
console.log("%c its wrong !", "color:green;")