const boxElem = document.querySelector("div");

//.style  ==>>just inline styles  not internal or external
console.log(boxElem.style.fontSize);
console.log(boxElem.style.width); //empty becouse external



//** */ How??
let boxElemstyles = getComputedStyle(boxElem);
console.log(boxElemstyles.width)
console.log(boxElemstyles);


//قدیمیه
let boxElemWidth = getComputedStyle(boxElem).getPropertyValue("width");
console.log(boxElemWidth)
