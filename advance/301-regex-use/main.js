// use regex

// let regexCode=/amin/

// let regexCode = /a.m/; //?  /a()m/  ==>اولی aباشه  دومی هرچی میخواد باشه  سومیm
let regexCode = /a.+m/; //?   first as -middle anuthing - last m
let text = "im mohammad amin, web developer";

console.log(regexCode.test(text));
