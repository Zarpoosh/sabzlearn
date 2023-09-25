// onChange("input" ,"select")

// عمدتا برای select ها استاده میشه
// برای input ها هم زیاد از onchange استفاده نمیشه

let countriesSelectBox = document.getElementById("country");
function changeHandler() {
  console.log("change");
  console.log(countriesSelectBox.value);
}
