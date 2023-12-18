let h1Eelm=document.querySelector("h1");
window.addEventListener("online", function(){
  // console.log("online")
  h1Eelm.classList.add("online")
  h1Eelm.innerHTML="online"
})

window.addEventListener("offline", function(){
  // console.log("offline")
  h1Eelm.classList.add("offline")
  h1Eelm.innerHTML=" offline"

})