// DOM => Document Object Model
// BOM => Browser Object Model
const products=[
    {id:1, name:"sport shoe", price:2100, link:"product.html?id=1" ,img:"images/1.png"},
    {id:2, name:"girl shoe", price:43000, link:"product.html?id=2",img:"images/2.png"},
    {id:3, name:"montaion shoe", price:76300, link:"product.html?id=3" ,img:"images/3.png"},

]
let containerProduct=document.querySelector(".container")

products.forEach(function(product){
    console.log(product)
    containerProduct.insertAdjacentHTML("beforeend", '<div class="product-card"><h1>'+product.name+'</h1><p>Lorem ipsum, or lipsum as it is sometimes known</p><div class="product-pic" style="background-image: url('+product.img+');"></div><div class="product-info"><div class="product-price">'+product.price+'</div><a href="product.html?id='+product.id+'" + product.id + " class="product-button">See More</a></div></div>')
})