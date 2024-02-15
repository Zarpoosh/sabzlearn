let user = {
  id: 1,
  name: "minoo",
  age: 20,
};

let user2 = {
  id: 2,
  name: "mohammad",
  age: 31,
};
//! call==>تعیین میمکنیم تو محدوده توابع اینthisبه کی اشاره بکنه
function showUser(score, city) {
  console.log(
    this.name + " is " + this.age + " old  ===>score",
    score,
    "city" + city
  );
}

//? بقیه ورودی ها رو  به شکل ازاد میگیره
// showUser.call(user , 20 , "ardabil");
// showUser.call(user2 , 18 , "esfahan");

//? دومی رو به شکل ارایه میگیره
// showUser.apply(user[(20, "ardabil")]);
// showUser.apply(user2[(12, "esfahan")]);

//?  bind ==> خودش تابع برمیگردونه height order function
console.log(showUser.bind(user));
console.log(showUser.bind(user2));

//or
showUser.bind(user)();
showUser.bind(user2)();

//or
let bindFunction = showUser.bind(user2, 12, "tabriz");
bindFunction();
