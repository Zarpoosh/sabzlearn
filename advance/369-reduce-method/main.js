let number = [1, 2, 3, 4, 5, 6];

// number.map();
// number.filter();

number.reduce((preValue, curentValue) => {
  console.log(preValue, curentValue); // 1,2 |2,3 |3,4 | 4,5 | 5,6

  //   return curentValue
  return "minicode"; //1,2 |  minicode, 3 | minicode, 4 | minicode, 5 | minicode 6
});


