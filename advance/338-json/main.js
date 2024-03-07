//json =====> برای انتقال دیتا بین بک اند و فرانت از طریق api
//*   میایم اول به جیسون تبدیل مکنیم بعداز طریق جیسون به بک اند ارسال میکنیم
//javascript object notation
// str , array , number, none ,...boolean(true, false)
// راهی برای فرمت بندی اطلاعات تا زبان های دیگه هم بشناسن 
//فرمت یونیک برا ارتباط ربان های مختلف با هم 

let users=
[
    {
        "id":1,
        "username":"minoo",
        "password":12212
    },
    {
        "id":2,
        "username":"ali",
        "password":67347
    },
    {
        "id":3,
        "username":"mohammad",
        "password":54342
    },
    {
        "id":4,
        "username":"danial",
        "password":2424
    }
]

let jsonData='[{"id":1,"username":"minoo","password":12212},{"id":2,"username":"ali","password":67347},{"id":3,"username":"mohammad","password":54342},{"id":4,"username":"danial","password":2424}]'

//! کاربرد جیسون تبدیل به جیسون و ارسال دیتا و تبدیل به سینتکس زبان خودش 
console.log(JSON.stringify(users));
console.log(JSON.parse(jsonData));