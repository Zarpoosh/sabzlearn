

function getCookie (cookieName) {
    let cookiesArray = document.cookie.split(';')

    let mainCookie = null

    cookiesArray.some(cookie => {
        if (cookie.includes(cookieName)) {
            mainCookie = cookie.substring(cookie.indexOf('=') + 1)
            return true
        }
    })

    return mainCookie
}


window.addEventListener("load", ()=>{
    let islogin=getCookie("login-token")
    // console.log(islogin)
    if (!islogin) {
        location.href="http://locallhost/390-cookie-project/login.html"
    }
})