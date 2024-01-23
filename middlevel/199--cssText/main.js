const h1Elem = document.querySelector("h1");
const btn = document.querySelector("button");

function setstyle() {
  // h1Elem.style.color="red"
  // h1Elem.style.backgroundColor="gray"
  // h1Elem.style.fontSize="50px"

  // easy way
  h1Elem.style.cssText = "color:red ; background-color:gray ; ";
}

btn.addEventListener("click", setstyle);
