//   sreead syntax
//  let numbers=[1,2,3,4,545];

//  numbers.forEach(number=> console.log(number));
// let copyNumbers =numbers;
// copyNumbers.push(20)
// console.log("number" , numbers);
// console.log("number" , copyNumbers);

// مجل ذخیره شازی متفاوت
// console.log(...numbers);
// let copyNumbers=[...numbers];
// copyNumbers.push(30)
// console.log(copyNumbers)

// num1=[1,2,3,4]
// num2=[4,5,6,7]
// let allNumbers=[...num1 , 763,98, ...num2]
// console.log(allNumbers)
/////////////////////////////////////////////////

// let nums=[2,4,7]
// function sum(a, b, c) {
//   console.log("a", a);
//   console.log("b", b);
//   console.log("c", c);
//   return a + b + c;
// }
// sum(2,4,7)
// console.log(sum(...nums))

/////////////////////////////////////////////////////////////////

// spread in object
// let users = {
//   id: 1,
//   name: "minoo",
//   age: 22,
// };
// let newUser = { ...users };
// newUser.age = 20;
// console.log("User", users);
// console.log("newUser", newUser);

////////////////////////////////////////////////////////////////////

// arguments & rest operator

// let sum = (...args) => {
//   console.log("a", a);
//   console.log("b", b);
//   console.log("c", c);
//   console.log("args", args);

//   console.log(arguments);

//   let sumAllArgs = 0;
//   let arrayArgs = Array.from(arguments);
//   arrayArgs.forEach((char) => (sumAllArgs += char));

//   args.forEach((char) => (sumAllArgs += char));

//   return sumAllArgs;
// };

// sum (2,4,3)
// console.log(sum(2, 4, 3, 45, 87));

///////////////////////////////////////////////////////////////////////////

// Array Desturacturing

// let user = [1, "minoo", 45, "tehran"];
// let userId=user[0]
// let userName=user[1]
// let userAge=user[2]
// به شکل خلاصه
// let [userId, userName, userAge, userCity = "ardabil"] = user;
// console.log("userId", userId);
// console.log("userName", userName);
// console.log("userAge", userAge);

// const showNumbers = () => [1, 2, 3, 4, , 5, 7, 8];
// let [firstNum, secondNum, thirdNum] = showNumbers();
// console.log(showNumbers);
// console.log(firstNum);
// console.log(secondNum);
// console.log(thirdNum);
//////////////////////////////////////////////////////////////////////////////
// object Destructring

// let user1 = {
//   id: 1,
//   name: "minoo",
//   age: 20,
// };
// let { id:usrID, name="zarpoosh", age } = user1;
// console.log(usrID);
// console.log(name);
// console.log(age);

/////////////////////////////////////////////////////////

// let { id: usrID, name = "zarpoosh", age } = users;

// let users = [
//   { id: 1, name: "kimia", age: 16, email: "jhgwjd@jgsl" },
//   { id: 2, name: "minoo", age: 56, email: "jhgwjd@jgsl" },
//   { id: 3, name: "romina", age: 78, email: "jhgwjd@jgsl" },
//   { id: 4, name: "maryam", age: 12, email: "jhgwjd@jgsl" },
// ];
// const getUser = (userID) => {
//   let mainUser = users.find((user) => user.id = userID);

//   return mainUser;
// };
// let { name: userName, email: userEmail } = getUser(3);
// console.log("userNme", userName);
// console.log("userEmail", userEmail);

// const userIDInput=document.querySelector("#user-id")
// userIDInput.addEventListener("keypress" ,event=>{
//     console.log(event)
// })

///////////////////////////////////////////////////////////////////////////////

// template strings(lliteral) /اینتر هم میشه استفادهد کرد

// let type = "fake";
// let names="minoo" + "zarpoosh"
// let txt = `lorem ipsome is ${type}=>${Math.pow(2,5)}`;

// console.log(txt);
//////////////////////////////////////////////////////////////////////////

// let numbers = [1, 2, 3, 4, 5];
// let userName = "minoozarpoosh";

// let user = {
//   id: 1,
//   anme: "minoo",
//   age: 20
// };

//for of  itrable =قابل شمارش
// for (let property of user) {
//   console.log(property);
// }

// function sum() {
//   console.log(arguments);
//   // arguments.forEach()
//   let allArgsSum = 0;

//   for (let arg of arguments) {
//     allArgsSum += arg;
//     console.log(arg);
//   }
//   return allArgsSum;
// }
// console.log("sum", sum(1, 2, 3, 4));

/////////////////////////////////////////////////////////////////////////////
// let liElems=document.getElementsByTagName("li")

// liElems.forEach()
// for(let li of liElems){
//     console.log(li)
//     li.addEventListener("click" , e=>e.target.remove())
// }

// console.log(liElems)
//////////////////////////////////////////////////////////////////////////

// for in
// let user = {
//   id: 1,
//   name: "minoo",
//   age: 20,
// };
// for (let item in user) {
//   console.log(`user.${item} : ${user[item]}`);
// }
/////////////////////////////////////////////////////////////////////////
// string padding
// let useranme = "amin";
// console.log(useranme.padStart(10));
// console.log(useranme.padEnd(6, "&"));
////////////////////////////////////////
// let size = "5";
// console.log(size.padStart(2, "0"));
////////////////////////////////////////
// let phonenumber = "09940002432";
// let last4digits = phonenumber.slice(-4);
// let finalphonenumber = last4digits.padStart(phonenumber.length, "*");
// console.log(finalphonenumber);
/////////////////////////////////////////////////////////////////////
// numeric separator
// let productPrice = 7_000_000;
// let postCost = 5_000;
// console.log("total price :", productPrice + postCost);
//////////////////////////////////////////////////////////////

// && ||
// let userAge = 19;
// if (userAge > 18) {
//   alert("your login successfyll");
// }

// userAge>18 ? alert("your login successfyll") : alert("wrong");
///////////////////////////////////////////////////////////////////
// let userAge = 18;
// userAge !== 18 || alert("your data is fake");

// usertype = "admin";
// let usertoken = usertype || "user";
// console.log(usertoken);
/////////////////////////////////////////////////////////////
// import { islogin, userRegister , userCount as userlength} from "./func.js";
// console.log(islogin(12));
// let newUserName = prompt("enter user name :");
// let newUserAge = prompt("enter user age :");

// console.log(userRegister(newUserName, newUserAge));
// console.log("user count :" , userlength)
//////////////////////////////////////////////////////////////////////
//  let userAge=Number(prompt('enter your age' ,18))
//  console.log("userAge" ,userAge)
//  console.log("userAge type :" ,typeof userAge)
/////////////////////////////////////////////////////////////////
