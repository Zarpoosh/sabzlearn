const contextmenu= document.getElementById("contextmenu");



function contextHandler(event){
    event.preventDefault();
    if(contextmenu.style.display="none"){
        contextmenu.style.left=event.pageX+"px";
        contextmenu.style.top=event.pageY+"px";
        contextmenu.style.display="block";
    }else{
        contextmenu.style.left=event.pageX+"px";
        contextmenu.style.top=event.pageY+"px";
    }

    console.log(event)
}

function clickContextMenu(){
    contextmenu.style.display="none"
}
function keyDownHandler(event){
    if(event.keycode===27){
        contextmenu.style.display="none";
    }
    console.log(event)
}




document.body.addEventListener("contextmenu" , contextHandler)
document.body.addEventListener("click" ,clickContextMenu)
document.body.addEventListener("keydown" , keyDownHandler)