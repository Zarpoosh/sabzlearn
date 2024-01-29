function sum(a, b, c) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);

  // console.log(arguments)

  //TODO convert args to array
  let arrayArgs = Array.from(arguments);
  let sumAll = 0;
  arrayArgs.forEach((item) => (sumAll += item));
  return sumAll;
}

console.log(sum(1, 2, 3, 5, 6));
