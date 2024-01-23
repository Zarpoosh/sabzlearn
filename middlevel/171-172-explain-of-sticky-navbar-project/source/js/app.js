const $ = document;
const mainNav = $.querySelector("#mainNav");
const image = $.querySelector("img");

document.addEventListener("scroll", function () {
  // console.log(document.documentElement.scrollTop)

  if (document.documentElement.scrollTop > 0) {
    mainNav.classList.add("bg-black");
    mainNav.classList.add("txt-white");
    image.style.height = "64px";
  } else {
    mainNav.classList.remove("bg-black");
    mainNav.classList.remove("txt-white");
    image.style.height = "84px";
  }
});
