const $=document;
const titleElem=$.querySelector(".title");
document.addEventListener("keyup" ,function(e){
    // console.log(e.key)
    appendValueToDom(e)
    let  userEventKey=e.key.toUpperCase()  //it has to be uppercase
    let mainKeyElem=document.getElementById(userEventKey)
    

    mainKeyElem.classList.add("hit")
    mainKeyElem.addEventListener("animationend", function(){
        mainKeyElem.classList.remove("hit")
    })
    console.log(mainKeyElem)
})

function appendValueToDom(e){
    // console.log(e)
    if (e.code==="Backspace"){
        titleElem.innerHTML=titleElem.innerHTML.slice(0,-1)
        return
    }
    titleElem.innerHTML+=e.key
}