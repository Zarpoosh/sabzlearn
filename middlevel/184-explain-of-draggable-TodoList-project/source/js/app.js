const $=document;
let addBtn=$.getElementsByClassName("title")
let modal=$.getElementsByClassName("modal")
let xBtn=$.querySelectorAll(".close")
let todo=$.querySelector(".todo")

addBtn.addEventListener("click", function(){
    console.log("add")
    modal.style.display="block"

})
xBtn.addEventListener("click", function(){
    
})