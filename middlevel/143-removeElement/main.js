// let btn=document.getElementById("btn");
// let h1Eem=document.getElementById("title");
// let h1text=document.getElementsByClassName("h1text");

// btn.addEventListener("click",function(){
//     console.log("remove")
//     h1Eem.remove()
//     console.log(h1Eem)


//     h1text.remove()   its wrong چون شبه آرایه است

// })

//////////////////////////////////////////////////////
let listItem=document.querySelectorAll(".list-item");
// console.log(listItem)
listItem.forEach(function(li){
    // console.log(li.innerHTML)
    li.addEventListener("click" , function(event){
        // console.log("clicked")
        // console.log(event.target)
        // event.target.remove();
        //////////////////////////////////
      event.target.parentElement.remove()

    })
})