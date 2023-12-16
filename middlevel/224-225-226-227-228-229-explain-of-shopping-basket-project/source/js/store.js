let allProducts = [
    { id: 1, title: 'Album 1', price: 10, img: 'Images/Album 1.png' , count:1 },
    { id: 2, title: 'Album 2', price: 20, img: 'Images/Album 2.png' , count:1 },
    { id: 3, title: 'Album 3', price: 35, img: 'Images/Album 3.png'  , count:1},
    { id: 4, title: 'Album 4', price:40, img: 'Images/Album 4.png' , count:1 },
    { id: 5, title: 'Coffee', price: 50, img: 'Images/Cofee.png' , count:1 },
    { id: 6, title: 'Shirt', price:60, img: 'Images/Shirt.png'  , count:1},
]

let userBasket = []

let $ = document
const shopItemsContainer = $.querySelector('.shop-items')
const bastekProductsContainer = $.querySelector('.cart-items')
const removeAllProducts=$.querySelector("#remove-all-products")
const cartTotalPrice=$.querySelector(".cart-total-price")

allProducts.forEach(function (product) {
    let productContainer = $.createElement('div')
    productContainer.classList.add('shop-item')

    let productTitleSpan = $.createElement('span')
    productTitleSpan.classList.add('shop-item-title')
    productTitleSpan.innerHTML = product.title

    let productImageElem = $.createElement('img')
    productImageElem.classList.add('shop-item-image')
    productImageElem.setAttribute('src', product.img)

    let productDetailsContainer = $.createElement('div')
    productDetailsContainer.classList.add('shop-item-details')

    let productPriceSpan = $.createElement('span')
    productPriceSpan.innerHTML = product.price
    productPriceSpan.classList.add('shop-item-price')

    let prodcutAddButton = $.createElement('button')
    prodcutAddButton.innerHTML = 'ADD TO CART'
    prodcutAddButton.className = 'btn btn-primary shop-item-button'
    prodcutAddButton.addEventListener('click', function () {
        addProductToBasketArray(product.id)
    })

    productDetailsContainer.append(productPriceSpan, prodcutAddButton)
    productContainer.append(productTitleSpan, productImageElem, productDetailsContainer)
    shopItemsContainer.append(productContainer)

})



function addProductToBasketArray (productId) {
    // let allProducts.some(function(product){
    //     product.id === productId
    // })

    let mainProduct = allProducts.find(function (product) {
        return product.id === productId
    })
    console.log(mainProduct);
    console.log(allProducts);

    userBasket.push(mainProduct)

    basketProductsGenerator(userBasket)
    calculateTotalPrice(userBasket)
    console.log(userBasket);
}

function basketProductsGenerator (userBasketArray) {
    bastekProductsContainer.innerHTML = ''

    userBasketArray.forEach (function (product) {

        let basketProductContainer = $.createElement('div')
        basketProductContainer.classList.add('cart-row')

        let basketProductDetailsContainer = $.createElement('div')
        basketProductDetailsContainer.className = 'cart-item cart-column'

        let basketProductImg = $.createElement('img')
        basketProductImg.setAttribute('src', product.img)
        basketProductImg.setAttribute('width', "100")
        basketProductImg.setAttribute('height', "100")
        basketProductImg.classList.add('cart-item-image')

        let basketProductTitleSpan = $.createElement('span')
        basketProductTitleSpan.classList.add('cart-item-title')
        basketProductTitleSpan.innerHTML = product.title

        basketProductDetailsContainer.append(basketProductImg, basketProductTitleSpan)

        let basketProductPriceSpan = $.createElement('span')
        basketProductPriceSpan.className = 'cart-price cart-column'
        basketProductPriceSpan.innerHTML = product.price

        let basketProductInputsContainer = $.createElement('div')
        basketProductInputsContainer.className = 'cart-quantity cart-column'

        let basketProductInput = $.createElement('input')
        basketProductInput.className = 'cart-quantity-input'
        basketProductInput.value = product.count
        basketProductInput.setAttribute('type', 'number')
        basketProductInput.addEventListener("change", function(productId){
            updateProductCount(product.id, basketProductInput.value)
        })

        let basketProductRemoveBtn = $.createElement('button')
        basketProductRemoveBtn.className = 'btn btn-danger'
        basketProductRemoveBtn.innerHTML = 'Remove'
        basketProductRemoveBtn.addEventListener("click" , function(){
            removeProductFromBasket(product.id)
            calculateTotalPrice(userBasket)
        })

        basketProductInputsContainer.append(basketProductInput, basketProductRemoveBtn)

        basketProductContainer.append(basketProductDetailsContainer, basketProductPriceSpan, basketProductInputsContainer)

        bastekProductsContainer.append(basketProductContainer)

    })
}

function removeProductFromBasket(productId){
    // console.log(productId);
    userBasket=userBasket.filter(function(product){
        return product.id!=productId
    })
    basketProductsGenerator(userBasket)
    // calculateTotalPriceAfterRemove(userBasket)
    console.log(userBasket);
}
removeAllProducts.addEventListener("click" ,function(){
    userBasket=[]
    basketProductsGenerator(userBasket)
    calculateTotalPrice(userBasket)
})

function calculateTotalPrice(userBasketArray){
    let totalPriceValue=0
    userBasketArray.forEach(function(product){
        totalPriceValue+=product.count* product.price
    })
    cartTotalPrice.innerHTML=totalPriceValue
}
// function calculateTotalPriceAfterRemove(userBasketArray){
//     let totalPriceValue=0
//     userBasketArray.forEach(function(product){
//         totalPriceValue-=-(product.count* product.price)
//     })
//     cartTotalPrice.innerHTML=totalPriceValue
// }
function updateProductCount(productId , newCount){
    console.log("productId:"+productId+"newCount:"+ newCount);
    userBasket.forEach(function(product){
        if(product.id===productId){
            product.count=newCount
        }
    })
    calculateTotalPrice(userBasket)
}