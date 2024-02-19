let userName="minoo zarpoosh"  // itreable
console.log(userName);
for(let chr of userName){
    console.log(chr);
}

let setUserName=new Set(userName)
console.log(setUserName);

//------------------------------------------------
// let items=[
//     {id:1},
//     {id:2},
//     {id:3}
// ]

// let setItemesData=new Set(items)

// console.log(setItemesData);
// setItemesData.add(22)
// console.log(setItemesData.has(22));  //datatype premetive
// console.log(setItemesData.has({id:2}));  //data type refrency  //! چون آدرس هر کدوم تو خونه های حافظه ذخیره میشه برا همین فالس برمیگردونه

//----------------------------------  How i sole it ??? ---------------------------------------
let item1 ={id:3}
let item2 ={id:1}
let item3 ={id:2}

let setItemesData2=new Set()
setItemesData2.add(22)
setItemesData2.add(item1)

console.log(setItemesData2.has({id:1}));   //! what is bug??? 

