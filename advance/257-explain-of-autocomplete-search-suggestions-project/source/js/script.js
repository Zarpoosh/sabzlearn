const $ = document;

const aoutoCompletRapper = $.querySelector(".search-input");
const searchInputElem = $.querySelector("input");
const aoutoCompletBox = $.querySelector(".autocom-box");

searchInputElem.addEventListener("keyup", function () {
  let saerchValue = searchInputElem.value;
  if (saerchValue) {
    aoutoCompletRapper.classList.add("active");
    let filterdWords = suggestions.filter(function (word) {
      return word.toLowerCase().include(saerchValue.toLowerCase());
    });

    console.log(filterdWords)
  } else {
    aoutoCompletRapper.classList.remove("active");
  }
});
