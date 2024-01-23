//  globalscope
// local scope
// block  {}
// TODO  engine مرورگر میاد اول اسکوپ همون تابع رو میبینه اگخ همچین متغییری نبود میره گلوبال رو میگرده تا پیداش کنه

// let number=346

function showNumber(){
    let number=18

    console.log("in function : ",number)
}
showNumber()
console.log("out function : ",number)