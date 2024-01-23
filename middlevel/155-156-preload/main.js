const loaderElem = document.querySelector(".container");

window.addEventListener("load", function () {
  // firstway
  // loaderElem.classList.add("hidden");

  // secondway
  loaderElem.className += "hidden";
});
