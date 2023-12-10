const $=document;

let allProducts=[
    {id:1 ,name:"Albom1" , price:12.43 , img:"Images/Album 1.png"},
    {id:2 ,name:"Albom2" , price:13.43 , img:"Images/Album 2.png"},
    {id:3 ,name:"Albom3" , price:65.43 , img:"Images/Album 3.png"},
    {id:4 ,name:"Albom4" , price:45.13 , img:"Images/Album 4.png"},
    {id:5 ,name:"Cofee" , price:34.43 , img:"Images/Cofee.png"},
    {id:6 ,name:"Shirt" , price:19.43 , img:"Images/Shirt.png"}
]
userBasket=[]

const shopItemsContainer=$.querySelector(".shop-items")
const basketProductsContainer=$.querySelector(".cart-item")
allProducts.forEach(function(product){
    let productContainer=$.createElement("div")
    productContainer.classList.add("shop-item")
    // console.log(productContainer);

    // product name
    let productTitle=$.createElement("span")
    productTitle.classList.add("shop-item-title")
    productTitle.innerHTML=product.name
    // console.log(productTitle);

    // porduct image
    let productImage=$.createElement("img")
    productImage.classList.add("shop-item-image")
    productImage.setAttribute("src" ,product.img)
    // console.log(productImage);
    
    // ////////////////////  product details ////////////////////////  

    let productContainerDetails=$.createElement("div")
    productContainerDetails.classList.add("shop-item-details")

    // price
    let productPrice=$.createElement('span')
    productPrice.classList.add("shop-item-price")
    productPrice.innerHTML=product.price

    // add btn
    let productBtn=$.createElement("button")
    productBtn.className="btn btn-primary shop-item-button"
    productBtn.innerHTML="ADD TO CART"
    productBtn.addEventListener("click", function(){
        addProductToBasketArray(product.id)
    })


    productContainerDetails.append(productPrice ,productBtn)
    productContainer.append(productTitle,productImage,productContainerDetails)

    // console.log(productContainer);
    shopItemsContainer.append(productContainer)
})

function addProductToBasketArray(productId){
    // console.log(productId);
    let mainProduct=allProducts.find(function(product){
        return product.id ===productId
    })
    // console.log(mainProduct);
    userBasket.push(mainProduct)
    basketProductsGenerator(userBasket)
    console.log(userBasket);
}

function basketProductsGenerator(userBasket){
    basketProductsContainer.innerHTML=""
    userBasket.forEach(function(product){
        let cartROw=$.createElement("div")
        cartROw.classList.add("cart-row")

        // cart item column
        let cartItem=$.createElement("div")
        cartItem.className="cart-item cart-column"
        //img
        let cartImage=$.createElement("img")
        cartImage.className="cart-item-image"
        cartImage.setAttribute('src' , product.img)
        cartImage.setAttribute('width' ,"100")
        cartImage.setAttribute('height' ,"100")
        //title
        let carttitle=$.createElement("span")
        carttitle.className="cart-item-title"
        carttitle.innerHTML=product.name

        cartItem.append(cartImage,carttitle)

        // cart price column
        let cartPrice=$.createElement("span")
        cartPrice.className="cart-price cart-column"
        cartPrice.innerHTML=product.price

        // cart quantity column
        let cartQuantity=$.createElement("div")
        cartQuantity.className="cart-quantity cart-column"
        //input
        let cartInput=$.createElement("input")
        cartInput.className="cart-quantity-input"
        cartInput.setAttribute("type","number")
        cartInput.value='1'
        //btn
        let removeBtn=$.createElement("button")
        removeBtn.className="btn btn-danger"
        removeBtn.innerHTML="REMOVE"
        removeBtn.setAttribute("type", "button")

        cartQuantity.append(cartInput, removeBtn)

        cartROw.append(cartItem,cartPrice,cartQuantity)
        basketProductsContainer.append(cartROw)
        console.log(cartROw);

    })
}