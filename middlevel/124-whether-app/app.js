// wheather application

let $ = document;
let inputBox = $.querySelector(".city-name");
let searchBtn = $.querySelector(".btn");
// ities data in arry
let cities = [
  { city: "tehran", temp: 12, weather: "sunny", humidy: 23, windspeed: 32 },
  { city: "shiraz", temp: 76, weather: "cloudy", humidy: 41, windspeed: 19 },
  { city: "tabriz", temp: 54, weather: "windy", humidy: 15, windspeed: 32 },
  { city: "esfahan", temp: 23, weather: "sunny", humidy: 17, windspeed: 17 },
  { city: "ardabil", temp: 34, weather: "cloudy", humidy: 32, windspeed: 13 },
];

searchBtn.addEventListener("click", function () {
  let serarchBarValue = inputBox.value;
  let mainCityData = cities.find(function (item) {
    return item.city === serarchBarValue;
  });

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
