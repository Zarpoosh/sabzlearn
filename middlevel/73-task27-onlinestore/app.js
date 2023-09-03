var allProducts = [
  { id: 1, name: "desk", price: 20 },
  { id: 2, name: "phone", price: 40 },
  { id: 3, name: "pc", price: 87 },
  { id: 4, name: "cocacula", price: 876 },
  { id: 5, name: "pen", price: 345 },
  { id: 6, name: "water", price: 889 },
];

var userbasket = [
  { id: 1, name: "milk", price: 40 },
  { id: 2, name: "water", price: 87 },
];

var userRequest = prompt("1.add product \n 2.remove product");

if (userRequest === "1") {
  var userProductName = prompt("enter your product name :");

  var productData;

  var isInShop = allProducts.some(function (product) {
    if (product.name === userProductName) {
      productData = product;
      return true;
    }
    return product.name == userProductName;
  });

  if (isInShop == true) {
    var newProduct = {
      id: 3,
      name: productData.name,
      price: productData.price,
    };
    userbasket.push(newProduct);
    console.log("basket : " + userbasket);
  } else {
    alert("موجود نمیباشد");
  }
} else if (userRequest === "2") {
  // alert("remove");
  var userProductName = prompt("enter your product name :");
  var productIndex = userbasket.findIndex(function (product) {
    return product.name === userProductName;
  });
  userbasket.splice(productIndex, 1);
  console.log("basket : " + userbasket);
} else {
  console.log("select the right item");
}
