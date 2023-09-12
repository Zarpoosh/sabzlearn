let h1Elem = document.getElementById("title");
let listItem = document.querySelectorAll(".list-item");

let input = document.getElementById("input");
let selectBox = document.getElementById("select");

console.log(h1Elem.innerHTML);
console.log(listItem[2].innerText); //دسترسی به مقدار عنصر
console.log(listItem[3].textContent); //دسترسی به مقدار
listItem[1].innerHTML = "درباره ما"; //دسترسی ه اون عنصر و ایجاد تغییر

// برای form , input , selectBox و اینا از value استفاه میشه
input.value = "japanese";
console.log(input.value); //نمایش مقدار داخل اینپوت
selectBox.value = "america";
console.log(selectBox.value);
