//TODO optinal chain

let user={
    id:1, 
    userName:"minoo",
    age:20,
    address:{
        cuntry:"iran"
    }
}

let userName=user.userName  
// let userStreet=user.address.city ? user.address.city.street :undefined

//------------------------------------------------------------------

// let userStreet=user.address.city?.street    //! اگه \رائرتی به اسم سیتی  داخل آدرس  بود نمایش بده اگر نه undefined برگردون
let userStreet=user?.address
console.log(userStreet);
console.log(userName);