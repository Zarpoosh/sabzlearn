const addAnimationBtn = document.querySelector("button");
const divElem = document.querySelector("div");
const spanElem = document.querySelector("span");

function setAnimation() {
  console.log(divElem);

  divElem.style.animation = "move 2s 3";
}

function animationStartHandler() {
  console.log("animation start");
  spanElem.innerHTML = "animation start";
  divElem.style.backgroundColor = "pink";
}

function animationiterationHandler() {
  console.log("animation repeat");
  spanElem.innerHTML = "animation repeat";
  divElem.style.backgroundColor = "yellow";
}

function animationendHandler() {
  console.log("animation end");
  spanElem.innerHTML = "animation end";
  divElem.style.backgroundColor = "lightgreen";
}

addAnimationBtn.addEventListener("click", setAnimation);
divElem.addEventListener("animationstart", animationStartHandler);
divElem.addEventListener("animationiteration", animationiterationHandler);
divElem.addEventListener("animationend", animationendHandler);
