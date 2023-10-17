let $=document;
let listItem=$.querySelectorAll("#list-item");
let addBtn=$.getElementById("add-btn");
let removeBtn=$.querySelectorAll(".remove-btn");
let list=$.getElementById("list")

// listItem.forEach(function(li){
//     li.addEventListener("click" , function(event){
//         event.target.parentElement.remove()    
//     })

// })
removeBtn.addEventListener("click" , function(event){
    event.target.parentElement.remove()    
})



  

addBtn.addEventListener("click" , function(){
    console.log("add")
})


