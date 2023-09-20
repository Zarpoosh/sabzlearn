let h1Elem = document.getElementById("title");

h1Elem.addEventListener("click", function () {
  // h1Elem.setAttribute("class", "red");

  // h1Elem.classList.add("red");
  // h1Elem.classList.remove("font");

  // toggle
  h1Elem.classList.toggle("red");
  h1Elem.classList.toggle("font");
});
