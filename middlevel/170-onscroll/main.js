function scrollHandler(event){
    console.log(document.documentElement.scrollTop , document.documentElement.scrollLeft);
}
document.addEventListener("scroll" , scrollHandler)