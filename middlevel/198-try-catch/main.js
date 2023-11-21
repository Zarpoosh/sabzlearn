let number=12
const p=document.querySelector("p")
const input =document.querySelector("input")
const btn=document.querySelector("button")

try{
    console.log(x)

}catch(error){
    // p.innerHTML=error.name
    console.log(error)
}




function checkValue(){
    try{
        if(input.value.length>8){
            throw "too hight"
        }else{
            throw "toolower"
        }
    }catch(error){
        p.innerHTML=error
    }finally{
        input.value=""
    }
    
}


btn.addEventListener("click" , checkValue)
