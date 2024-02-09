// string paddding

let userName = "minoo";

//default is space
console.log(userName.padStart(6, "*"));

//////////////////////////////////////////////////////
// let size="8"
// console.log(size.padStart(2,"0"))

///////////////////////////////////////////////////

let phonNumber = "09940002432";

let last4Digits = phonNumber.slice(-4);
// console.log(last4Digits)
let finalNumber = last4Digits.padStart(phonNumber.length, "*");
console.log(finalNumber);
