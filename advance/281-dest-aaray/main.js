//array dest

let user = [1, "minoo", 20];

// let userId=user[0]
// let userName=user[1]
// let userAge=user[2]

//? به همین راحتی اعضای آرایه رو یکی یکی تو ظرف جدا ذحیره میکنیم
let [userId, userName, userAge] = user;

console.log("userId", userId);
console.log("userName", userName);
console.log("userAge", userAge);

const showNumbers = () => [2, 7, 8, 1, 3, 4];
//*  اگه بخوایم یکی و نزاره خالی میزاریم
let [num1, , num2, num3] = showNumbers();

console.log(num1);
console.log(num2);
console.log(num3);
/////////////////////////////////////let user = [1, "minoo", 20];
// let [userID, userName, userAga, userCity="ardabil"] = user;

// console.log(userID)
// console.log(userName)
// console.log(userAga)
