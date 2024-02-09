//spread syntax - just itterable (array, string)

let numbers = [1, 2, 3, 4, 5, 56];

// console.log(numbers[0], numbers[2])
// numbers.forEach(num =>console.log(num));

//------------------------------------------------------------

// let copyNumbers=numbers
// copyNumbers.push(29)

// //! we cant push
// // console.log("number :", numbers)
// // console.log("number: ", copyNumbers)

//----------------------------- spread in array -------------------------------
// console.log(...numbers)

let copyNumbers = [...numbers];
copyNumbers.push(29);

//? we can push
// console.log("number :", numbers)
// console.log("number: ", copyNumbers)

// let nums1 = [1, 2, 3, 4];
// let nums2 = [5, 6, 7, 8];
// let allNumbers = [...nums1, ...nums2 , 54,9868];
// console.log(allNumbers);

//------------------------------------------------------
// function myFunction(x, y, z) {}
// const args = [0, 1, 2];
// myFunction(...args);
//-----------------------------------------------------

const a = [[1], [2], [3]];
const b = [...a];

b.shift().shift();
// 1

// Oh no! Now array 'a' is affected as well:
console.log(a);
// [[], [2], [3]]
