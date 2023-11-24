const $=document;
document.addEventListener("keyup" ,function(e){
    // console.log(e.key)
    let  userEventKey=e.key.toUpperCase()  //it has to be uppercase
    let mainKeyElem=document.getElementById(userEventKey)
    

    mainKeyElem.classList.add("hit")
    mainKeyElem.addEventListener("animationend", function(){
        mainKeyElem.classList.remove("hit")
    })
    console.log(mainKeyElem)
})