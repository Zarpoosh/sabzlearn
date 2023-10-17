let input=document.getElementById("input");
let btn=document.getElementById("btn")

btn[0].addEventlistener("click",function(){
    if(passwordField.type=="text"){
        passwordField.type="passwors";
        btn[0].classList.remove("active");
    }else{
        passwordField.type="text";
        btn[0].classList.add("active")
    }
})
