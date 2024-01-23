const listItem = document.querySelectorAll("li");
const inputElem = document.querySelector("input");
const ulElem = document.querySelector(".list");

// listItem.forEach(function (item) {
//   item.addEventListener("click", function (event) {
//     console.log(event.target);
//     event.target.remove();
//   });
// });

ulElem.addEventListener("click", function (e) {
  // console.log(e.target.tagName);

  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});

inputElem.addEventListener("keypress", function (e) {
  if (e.keyCode == 13) {
    // console.log("enter press")
    let newLanguageLi = document.createElement("li");
    newLanguageLi.innerHTML = e.target.value;

    ulElem.append(newLanguageLi);
    console.log(listItem);
    e.target.value = "";
  }
});
