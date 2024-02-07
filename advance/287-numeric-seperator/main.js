// numeric seperator  _  --> جدا کننده اعداد

let productPrice = 7_000_000;

let postCost = 5_000;

console.log("total price:", postCost + productPrice);


let products=[
    {is:1, name:"minoo", price:2_000}
]

//TODO ------------------------ **restrict** of numeric seperator -------------------------

//? we can solve this problems with **Regex**

let stringPrice ="2_000"
let numberPrice=2000

console.log(Number(stringPrice))   //==> its NaN becpuse of _  

console.log(parseInt(stringPrice))