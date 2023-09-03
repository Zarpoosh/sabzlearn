// primitives => number , string , boolean , symbol, null, undefind, bigint

var num1 = 10;
var num2 = num1;
num2 = 20;
console.log(num1);
console.log(num2);
////////////////////////////////////////////
// refrence datatype => object ,array , function
var userName1 = ["minoo", "mohammad", "amir", "zarpoosh"];
var userName2 = userName1;
userName2.push("kimia");
console.log(userName1);
console.log(userName2);
///////////////////////////////////////////
// refrence datatype
var product = {
  id: 1,
  title: "pen",
  price: 100000000,
};
var newproduct = product;
newproduct.ount = 10;
console.log(product);
console.log(newproduct);
