
// let price = [1_000, 20_000, 3_000, 500_000];

// let totalPrice = price.reduce((prePrice, currentPrice) => {
//   console.log(prePrice,  currentPrice);
//   return prePrice+ currentPrice;
// });

// console.log("output:", totalPrice);

//TODO -----------------------------------------------------------------

let numbers = [1,2,3,2,1,5,6,7]; //==>

// numbers.reduce((premember, currentmember) => {
//   console.log(premember, currentmember);
//   return currentmember;
// }, "minicode");


//!  مشخص کنه از هر کدوم چندتا تکرار شده
let itemReapet=numbers.reduce((obj, currentnumber ) => {
  // console.log({...obj});
  return {...obj,[currentnumber] : (obj[currentnumber]||0)+1}
}, {});

console.log(itemReapet)