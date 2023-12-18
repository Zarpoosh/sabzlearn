let locationSearch=location.search
// console.log(locationSearch)
// console.log(typeof(locationSearch));
// bad way
// locationSearch.slice(1).split("=")[1]


let userInfo=document.querySelector("h1")

let users=[
    {id:1, name: "John", age: 22},
    {id:2, name: "minoo", age: 20},
    {id:3, name: "zarpoosh", age: 34},
    {id:4, name: "danial", age: 44},
    {id:5, name: "sogand", age: 12},
    {id:6, name: "ramin", age: 30},

]

// good way
let locationSearchParam=new URLSearchParams(locationSearch)
let userIdParam=locationSearchParam.get("id")
// console.log(userIdParam)


let mainUsre=users.find(function(user){
    return user.id == userIdParam
})

if(mainUsre){
    userInfo.innerHTML=  "name: "+mainUsre.name +" |age:"+mainUsre.age
}else{
    userInfo.innerHTML='user not found:('
}
console.log(mainUsre)

// http://127.0.0.1:5500/244-URL-saerch-params/index.html?id=3