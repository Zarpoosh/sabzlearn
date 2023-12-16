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

const product = [
  { id: 1, name: "laptopb", price: 29900 },
  { id: 2, name: "phone", price: 32300 },
  { id: 3, name: "handsfere", price: 120000 },
  { id: 4, name: "ssd card", price: 76000 },
];
console.table(product);
