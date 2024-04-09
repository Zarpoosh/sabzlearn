//TODO ===>> Cookies 

// login ==> save paasword in cookie

const setCookieBtn=document.querySelector("button")

setCookieBtn.addEventListener("click" , ()=>{
    // console.log("cookie");
    console.log(document.cookie);

    const now=new Date()
    console.log(now.getTime());

    document.cookie="user-name=minoo-zarpoosh;path=/;expires...?"
})