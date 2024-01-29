//rest operator must be last
const sum = (a, b, c, ...args) => {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("args", args);

  // console.log(arguments)

  //TODO convert args to array
  let sumAll = 0;
  args.forEach((item) => (sumAll += item));
  return sumAll;
};

console.log(sum(1, 2, 3, 5, 6));
