
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // f0e86320b328f367db80dcb46f6cce3f
    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


const $=document

const searchBox=$.querySelector(".search-box")
const city= $.querySelector(".city")
const date= $.querySelector(".date")
const tempt= $.querySelector(".temp")
const wethear = $.querySelector(".weather")
const hiLow= $.querySelector(".hi-low")


searchBox.addEventListener("keyup" , (e)=>{
    if(e.keyCode===13){
        const searchValue=searchBox.value
        console.log(searchValue)
        searchBox.value=""
    }
})