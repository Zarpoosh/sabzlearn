//example for chaning handling

let fetchData = () => {
  return new Promise((resolve, regect) => {
    setTimeout(() => {
      // console.log();
      resolve({ id: 1, message: "fetching data" });
    }, 2000);
  });
};

const parsData = (data) => {
  return new Promise((resolve, regect) => {
    setTimeout(() => {
      console.log("fake data");
      let parsOutput = `parsed the data for id: ${data.id} and with message : ${data.message}`;
      resolve({ parsed: parsOutput });
    }, 2000);
  });
};

const showData = (response) => {
  return new Promise((resolve, regect) => {
    setTimeout(() => {
      console.log(response.parsed);
      resolve(response);
    }, 2000);
  });
};





fetchData()
  .then(parsData)