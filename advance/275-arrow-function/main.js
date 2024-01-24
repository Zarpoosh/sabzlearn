//arrow function

// function sum(num1, num2) {
//   let addNumbers=num1+num2
//   return addNumbers
// }
// console.log(sum(2,3))

// ?---------------------------
// TODO let or const

// const sum=(num1, num2) =>{
//   let addNumbers=num1+num2
//   return addNumbers
// }

// const power=(x,y)=>{
//   return x**y
// }

// const power = (x, y) => x ** y;

// const logger=(val)=>console.log(val);
const logger=val=>console.log(val);     //اگه یه ورودی داشته باشیم پارانتز نمیخواد


const generateUser=(id,user,age=32)=>({id:id,user:user,age:age})  //! چون آکولاد های ابجکت و با مال تابع اشتباه میگیره باید تو پارانتز بزاریم
                          //*default value

// console.log(power(2, 3));
// console.log(sum(2, 3));
// logger("im minoo")
console.log(generateUser(1,"minoo",20))