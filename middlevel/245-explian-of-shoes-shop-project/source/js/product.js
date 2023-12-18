// ✌ :))

let backBtn=document.querySelector("button");
const products=[
    {id:1, name:"sport shoe", price:2100, link:"product.html?id=1" ,img:"images/1.png"},
    {id:2, name:"girl shoe", price:43000, link:"product.html?id=2",img:"images/2.png"},
    {id:3, name:"montaion shoe", price:76300, link:"product.html?id=3" ,img:"images/3.png"},

]
let locationSearch=location.search
let datailContainer=document.querySelector(".details")
let locationSearchParam=new URLSearchParams(locationSearch)
let userIdParam=locationSearchParam.get("id")



let mainProduct=products.find(function(product){
    return product.id == userIdParam  
})
datailContainer.insertAdjacentHTML("beforeend", '  <div class="desc"><h1>'+mainProduct.name+'</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atnobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequunturincidunt molestias?</p></div><div class="image"><img src="'+mainProduct.img+'" /></div>')
backBtn.history.back();