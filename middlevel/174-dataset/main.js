// adtaset یه آبجکت که هرچی دیتا برا المنت ست کرده باشی رو نشون میده

let btn = document.querySelector("button");
console.log(btn.dataset);

function showDataId(event) {
  console.log(event.target.dataset.id, event.target.dataset.name);
}
