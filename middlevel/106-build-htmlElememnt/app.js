// create a new element in js dom

let userName = prompt("enter your name :");
let newH1Elem = document.createElement("div");

newH1Elem.innerHTML = userName;
newH1Elem.setAttribute("id", "new");
newH1Elem.style.color = "blue";
console.log(newH1Elem);
