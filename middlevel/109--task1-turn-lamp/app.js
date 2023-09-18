let bulbImg = document.getElementById("bulb");
let btn = document.getElementById("btn");

let bulbFlag = false;

function turnoffOn() {
  //   alert("turn off/on");
  if (bulbFlag) {
    bulbImg.setAttribute("src", "./img/pic_bulbon.gif");
    btn.innerHTML = "turn on";
    bulbFlag = false;
  } else {
    bulbImg.setAttribute("src", "./img/pic_bulboff.gif");
    btn.innerHTML = "turn off";
    bulbFlag = true;
  }
}

console.log(bulbFlag);
