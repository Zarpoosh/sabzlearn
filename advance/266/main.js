// ! sync and async await

// ------------------- sync----------------------- پشت سر هم

console.log(1);
console.log(2);

console.log(3);
console.log(4);
console.log(5);

// ---------------- asynchronous  ---------------- اول پایینی بعد اونی که طول میکشه
console.log(1);
console.log(2);

setTimeout(function () {
  console.log(3);
}, 5000);
console.log(4);
console.log(5);
