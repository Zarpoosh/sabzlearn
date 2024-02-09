// // arrow function

// let numbers = [1, 2, 3, 4, 55, 75, 23];

// // numbers.forEach((num)=>console.log(num))

// let mapData = (numbers = numbers.map((num) => num * 2));
// console.log(mapData);

// // ----------------------------arrow func in addEventListener  arrow function-------------------------

// const btn=document.querySelector('#btn');
// btn.addEventListener("click", (e) =>{
//     console.log(e)
// })

const body = document.querySelector("body");
const clickTarget = document.getElementById("click-target");
const mouseOverTarget = document.getElementById("mouse-over-target");

let toggle = false;
function makeBackgroundYellow() {
  body.style.backgroundColor = toggle ? "white" : "yellow";

  toggle = !toggle;
}

clickTarget.addEventListener("click", makeBackgroundYellow, false);

mouseOverTarget.addEventListener("mouseover", () => {
  clickTarget.removeEventListener("click", makeBackgroundYellow, false);
});
