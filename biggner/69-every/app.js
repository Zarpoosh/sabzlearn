// some وقتی به true برسه میشکنه متوقف میشه 
// every هم زمانی که به false برسه میشکنه متوقف میشه

var ages = [19, 34, 76, 12];
var isall = ages.every(function (age) {
  return age > 18;
});
console.log(isall);
