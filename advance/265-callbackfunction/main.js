const btn = document.querySelector("button");

// //TODO تابعی که به عنوان ورودی به تابع دیگه ارسال میشه میگن callback function
// function clickHandler() {
//     console.log("clicked")
//     // return undefined
// }

// btn.addEventListener("click",clickHandler)

function loger(callBackFunc) {
  console.log("loged1");
  // console.log(callBackFunc)
  callBackFunc();
}

function loger2() {
  console.log("logger2");
}

// loger(loger2)

let numbers = [1, 2, 3, 4, 5, 65];

numbers.map(function (item) {
  console.log(item);
});
