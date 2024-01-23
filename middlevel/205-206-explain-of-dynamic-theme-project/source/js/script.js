const btn = document.querySelectorAll(".btn");

btn.forEach(function (theme) {
  console.log(theme);
  theme.addEventListener("click", function (e) {
    let btnColor = e.target.dataset.color;
    document.documentElement.style.setProperty("--theme-color", btnColor);
  });
});
