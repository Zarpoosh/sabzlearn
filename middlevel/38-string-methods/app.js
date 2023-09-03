// string methods
var text = "i love javascript";
console.log(text[0]);
console.log(text.charAt(0));
console.log(text.charCodeAt(8)); //ascii | اسکی    a:97 A:65
console.log(text.concat(" & react ")); //concat == +str
console.log(text.trim()); //trim is clear all of space in start & end of string.
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.search("java")); //logگرفتن indexکه از اونجا این  متن شروع شده . اگه نبود -۱ برمیگردونه .
console.log(text.search("rexrors"));
console.log(text.indexOf("love")); //indx  شروع کلمه
console.log(text.includes("love")); //true or false
