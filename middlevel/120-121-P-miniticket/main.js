let countryselectbox = document.querySelector(".countryselect");
let citySelectBox = document.querySelector(".cityselect");

let countryData = {
  iran: ["tabriz", "ardabil", "shiraz", "esfahan"],
  usa: ["america", "torentu", "newyork", "newjersy"],
  urop: ["germany", "monikh", "hamborg", "holand"],
};

countryselectbox.addEventListener("change", function () {
  if (countryselectbox.value === "please select") {
    citySelectBox.innerHTML = "";
    citySelectBox.innerHTML += "<option>select city</option>";
  } else {
    let mainCountryName = countryselectbox.value;
    let mainCountryCities = countryData[mainCountryName];

    mainCountryCities.forEach(function (city) {
      // console.log(city);
      citySelectBox.innerHTML = "";
      citySelectBox.innerHTML += "<option>" + city + "</option>";
    });
  }
});
