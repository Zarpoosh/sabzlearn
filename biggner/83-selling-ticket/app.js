var cities = {
  tehran: ["shayryaar", "vanak", "haraj", "tehran"],
  ardabil: ["ardabil", "germi", "mashgin"],
  shiraz: ["shiraz", "fars", "takhtjamshid"],
  tabriz: ["marand", "jolfa", "tabriz"],
};
var startProvine = prompt("enter the rprovine: ");

var mainprovinecities = cities[startProvine];
mainprovinecities.forEach(function (city) {
  console.log(city);
});
