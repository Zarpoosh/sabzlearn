// wheather application

let $ = document;
let inputBox = $.querySelector(".city-name");
let searchBtn = $.querySelector(".btn");
// ities data in object
let cities = {
  tehran: {
    city: "tehran",
    temp: 12,
    weather: "sunny",
    humidy: 23,
    windspeed: 32,
  },
  shiraz: {
    city: "shiraz",
    temp: 76,
    weather: "cloudy",
    humidy: 41,
    windspeed: 19,
  },
  tabriz: {
    city: "tabriz",
    temp: 54,
    weather: "windy",
    humidy: 15,
    windspeed: 32,
  },
  esfahan: {
    city: "esfahan",
    temp: 23,
    weather: "sunny",
    humidy: 17,
    windspeed: 17,
  },
  ardabil: {
    city: "ardabil",
    temp: 34,
    weather: "cloudy",
    humidy: 32,
    windspeed: 13,
  },
};

searchBtn.addEventListener("click", function () {
  let serarchBarValue = inputBox.value;
  let mainCityData = cities[serarchBarValue];

  if (mainCityData) {
    console.log(mainCityData);
    $.querySelector(".city").innerHTML = "Wheather in " + mainCityData.city;
    $.querySelector(".temp").innerHTML = "temp : " + mainCityData.temp;
    $.querySelector(".weather").innerHTML = "weather : " + mainCityData.weather;
    $.querySelector(".humidy").innerHTML = "humidy : " + mainCityData.humidy;
    $.querySelector(".windspeed").innerHTML =
      "windspeed : " + mainCityData.windspeed;
  } else {
    alert("اطلاعات درستی وارد کنید .");
  }
});
