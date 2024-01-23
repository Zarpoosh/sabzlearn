// event delegation  ===> 1-bubbling 2-capturing

const divElems = document.querySelectorAll("div");
console.log(divElems);

//! event bubbling
divElems.forEach(function (div, index) {
  div.addEventListener("click", function (event) {
    console.log("div  " + (index + 1));

    //? use event.target to change sametag color
    event.target.style.backgroundColor = "green";
  });
});
