// online store with array,filter,foreach,

var userbasket = [
  { id: 1, name: "desk", price: 500000 },
  { id: 2, name: "phone", price: 5000000 },
  { id: 3, name: "pc", price: 10000000 },
  { id: 4, name: "cocacula", price: 20000 },
  { id: 5, name: "pen", price: 9000 },
  { id: 6, name: "water", price: 2000 },
];

var filterProductName = userbasket.filter(function (product) {
  return product.price < 100000;
});
var postCost = filterProductName.length * 1000;
console.log(postCost);

var sum = 0;
userbasket.forEach(function (product) {
  sum = sum + product.price;
});
var totalPrice = sum + postCost;
console.log("totalPrice", totalPrice);
