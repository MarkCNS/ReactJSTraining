const exPromise = new Promise((resolve, reject) => {
  const condition = true;
  if (condition) {
    setTimeout(function () {
      resolve("Promise is resolved!");
    }, 0);
  } else {
    reject("Promise is rejected!");
  }
});

const demoPromise = function () {
  exPromise
    .then((successMsg) => {
      console.log("Success : " + successMsg);
    })
    .catch((errorMsg) => {
      console.log("Error : " + errorMsg);
    });
};

demoPromise();
