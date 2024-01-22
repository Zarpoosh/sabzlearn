//! pure function
// باید به ازای هر ورودی یه خروجی داشته باشه / به متغییر های خارج از خودش نباید  دست دراز کنه / رندوم اینا استفاده نشه
// 1 -one & const out put
// 2- doesnt have side efect

let testNumber=100
function power(num1, num2) {
    testNumber=1000
    return num1**num2;

    //? multiply to 0<number<1
    // return Math.random() * num1*num2
}

console.log(power(3, 2));