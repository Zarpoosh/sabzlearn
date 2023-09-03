var allProducts = [
  { id: 1, name: "desk", price: 20 },
  { id: 2, name: "phone", price: 40 },
  { id: 3, name: "pc", price: 87 },
];

var userbasket = [
  { id: 1, name: "milk", price: 40 },
  { id: 2, name: "wather", price: 87 },
];

var userproduct = prompt("enter product name :");
var requestrpoduct;
var isinshop = allProducts.some(function (product) {
  if (product.name === userproduct) {
    requestrpoduct = product;
    return true;
  }
});

if (isinshop == true) {
  var newproduct = {
    id: 3,
    name: requestrpoduct.name,
    price: requestrpoduct.price,
  };

  userbasket.push(newproduct);
  var sum = 0;
  userbasket.forEach(function (product) {
    sum = sum + product.price;
  });

  console.log(userbasket);
  alert("total price "+ sum);
} else {
  console.log("isnt there ");
}
