let $ = document;
const hourElem = $.querySelector("#hour");
const minutes = $.querySelector("#minute");
const secondElem = $.querySelector("#seconds");

setInterval(function () {
  let myDate = new Date();
  let nowHour = myDate.getHours();
  let nowMinuts = myDate.getMinutes();
  let nowSecond = myDate.getSeconds();

  // console.log(nowHour)
  // console.log(nowMinuts)
  // console.log(nowSecond)

  if (nowHour < 10) {
    nowHour = "0" + nowHour;
  }
  if (nowMinuts < 10) {
    nowMinuts = "0" + nowMinuts;
  }
  if (nowSecond < 10) {
    nowSecond = "0" + nowSecond;
  }
  hourElem.innerHTML = nowHour;
  minutes.innerHTML = nowMinuts;
  secondElem.innerHTML = nowSecond;

  console.log(myDate);
}, 1000);
