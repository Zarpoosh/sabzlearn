// setTimeout(
//   () => {
//     if (!hasProfile) {
//       alert("please opload a profile");
//     }
//   },
//     Math.random() * 10

// );

// console.log(random);





function waitRandomTime() {
    const randomTime = Math.floor(Math.random() * 6) + 10; // generate a random number between 10 and 15
    console.log(`Waiting for ${randomTime} seconds...`);
    setTimeout(() => {
      console.log(`Finished waiting for ${randomTime} seconds.`);
    }, randomTime * 1000); // convert seconds to milliseconds for setTimeout
  }
  waitRandomTime();
  