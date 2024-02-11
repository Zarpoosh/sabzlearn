
let divElem = document.getElementsByTagName("div");

for (let div of divElem) {
  div.addEventListener("click", function () {
    for (let otherDiv of divElem) {
      otherDiv.style.backgroundColor = "white";
    }
    this.style.backgroundColor = " green";
  });
}
