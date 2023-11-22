let btn=document.querySelector("button")



function changeColor(){
    document.documentElement.style.setProperty("--test-color" , "blue")
    console.log(document.documentElement.style.getPropertyValue("--test-color"));
}

btn.addEventListener("click" , changeColor)