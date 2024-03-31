// اطلاعات گوشی کاربر مثل باتری یا کلیپبرد وبکم 

// console.log(window.navigator)

//!--------------------------------------------------------------------
const button1 = document.querySelector(".wrapper1");
const button2= document.querySelector(".wrapper2");
const button3 = document.querySelector(".wrapper3");



// button1.addEventListener("click", ()=>{
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

// button2.addEventListener("click", ()=>{
//     if(window.navigator.clipboard){
//         window.navigator.clipboard.readText().then(res=>console.log("clipBoard text :" , res));
//     }
// })

//!----------------------------------------------------------------------------------------------
button3.addEventListener("click", ()=>{
    if (navigator.getBattery) {
        window.navigator.getBattery().then(batteryInfo=>console.log("getbattert:" , batteryInfo));
        batteryInfo.addEventListener("levelhange", ()=>{
            console.log("شارژ کاربر تغیر کرد");
        })
    }
})