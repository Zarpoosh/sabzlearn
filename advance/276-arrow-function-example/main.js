// arrow function

let numbers = [1, 2, 3, 4, 55, 75, 23];

// numbers.forEach((num)=>console.log(num))

let mapData = (numbers = numbers.map((num) => num * 2));
console.log(mapData);


// ----------------------------arrow func in addEventListener  arrow function-------------------------

const btn=document.querySelector('#btn');
btn.addEventListener("click", (e) =>{
    console.log(e)
})