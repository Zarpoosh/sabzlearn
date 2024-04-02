let list = [
  ["minoo", "mohammad"],
  ["maryam", "kimia", "romina", "babak"],
  ["joseph", "lili", "ali"],
];

// console.log(list[0][1]); //*ارایه دوبعدی
let emrgedUsr = list.reduce((prevlist, currentlist) => {
  console.log(prevlist.concat(currentlist));
  // return prevlist.concat(currentlist);


  //! spred syntax
  return [...prevlist, ...currentlist]

}); //==> ["minoo" , "mohammad", "maryam", "kimia" , "romina" ,"babak" ,"joseph" , "lili" , "ali"]

console.log(emrgedUsr);

