// promise creation
// const myPromise = new Promise((resolve, rejected) => {
//   resolve("this is my 1st promise");
// });

// const myPromise2 = new Promise((resolve, rejected) => {
//   rejected("data not fetch");
// });

// myPromise
//   .then((data) => {
//     const splitData = data.split(" ");
//     return splitData;
//   })
//   .then((reData) => {
//     return reData;
//   })
//   .then((arryData) => {
//     const newData = arryData.map((item, index) => {
//       return (arryData[index] = item + " ROdro");
//     });
//     return newData[0];
//   })
//   .then((finalOutput) => {
//     console.log(finalOutput);
//   });

// promise consume

const fetchData = () => {
  return new Promise((resolve, reject) => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

function display(data) {
  return data.products[0];
}

function images(data) {
  return data.images;
}

// fetchData()
//   .then((data) => {
//     return display(data);
//   })
//   .then((final) => {
//     return images(final);
//   })
//   .then((allImg) => {
//     console.log(allImg[0]);
//   });

// todo : async await

async function allCaller() {
  const ourData = await fetchData();
  const data = display(ourData);
  const finalOutput = images(data);
  console.log(finalOutput);
}

allCaller();
