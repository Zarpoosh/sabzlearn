let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// f0e86320b328f367db80dcb46f6cce3f
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const $ = document;
const searchBox = $.querySelector(".search-box");
const date = $.querySelector(".date");
const tempt = $.querySelector(".temp");
const wethear = $.querySelector(".weather");
const hiLow = $.querySelector(".hi-low");
let city = $.querySelector(".city");

searchBox.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    fetchData();
    searchBox.value = "";
  }
});

let apiData = {
  url: "https://api.openweathermap.org/data/2.5/weather?q=",
  key: "f0e86320b328f367db80dcb46f6cce3f",
};
function fetchData() {
  let countryValue = searchBox.value;
  fetch(`${apiData.url}${countryValue}&appid=${apiData.key}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      showData(data);
    });
}
function showData(data) {
  city.innerHTML = `${data.name} , ${data.sys.country}`;
  tempt.innerHTML = `${Math.floor(-273.15 + data.main.temp)}°c`;
  hiLow.innerHTML = `${Math.floor(-273.15 + data.main.temp_max)} / ${Math.floor(-273.15 + data.main.temp_min)}`;
  wethear.innerHTML=`${data.weather[0].main}`
}
