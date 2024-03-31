// اطلاعات گوشی کاربر مثل باتری یا کلیپبرد وبکم 

// console.log(window.navigator)

//!--------------------------------------------------------------------
const button = document.querySelector(".wrapper");

// button.addEventListener("click", ()=>{
//     console.log("clicked");
//     let copyText="کپی شد :)"
    

//     if (window.navigator.clipboard) {
//         window.navigator.clipboard.writeText(copyText);
//         alert("متن در کلیپ برد شما ذخیره شد ")
//     } else {
//         alert("لطفا از مرورگر کروم استفاده کنید !")
//     }
// })

//!--------------------------------------------------------------------

button.addEventListener("click", ()=>{
    if(window.navigator.clipboard){
        window.navigator.clipboard.readText().then(res=>console.log("clipBoard text :" , res));
    }
})