//TODO ===>> Cookies 

// login ==> save paasword in cookie

const setCookieBtn=document.querySelector("button")

setCookieBtn.addEventListener("click" , ()=>{
    // console.log("cookie");
    console.log(document.cookie);


    //! ==> از سال ۱۹۷۰ به اینور این همه میلی ثانیه میگذره
    const now=new Date()
    // console.log(now.getTime());

    console.log(now)
    let expireDay=now.setTime(now.getTime()+ 2*24*60*60 *1000)
    console.log(now)

    document.cookie=`user-name=minoo-zarpoosh;path=/;expires${now}`
})