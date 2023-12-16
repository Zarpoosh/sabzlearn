let costumScroll=document.querySelector("#scroll")


window.addEventListener("scroll", function(){
    // console.log("scroll")
    let scrollTop=this.window.scrollY

    // ارتفاع محتوای سایت با المنت ها
    let documentHeight=document.body.clientHeight
    console.log("documnent height"+documentHeight)

    let windowHeight=window.innerHeight
    console.log("windowHeight"+windowHeight)

    let scrollPercent=scrollTop/(documentHeight - windowHeight)
    let scrollPercentRounder=Math.round(scrollPercent*100)

    costumScroll.style.width=scrollPercentRounder+"%"
    console.log(scrollPercentRounder)
})