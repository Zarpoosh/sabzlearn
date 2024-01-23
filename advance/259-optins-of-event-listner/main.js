// event listener options
const btn = document.querySelector("button");
btn.addEventListener(
  "click",
  function () {
    console.log("clicked :)");
  },
  { once: true },
);
