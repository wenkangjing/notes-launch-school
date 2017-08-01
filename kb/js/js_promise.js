let iPromise = new Promise((resolve, reject) => {
  // async call resove
  setTimeout(function(){
    resolve("Success!");
  }, 2000);
  // or
  // setTimeout(function(){
  //   reject("Reject!");
  // }, 5000);  
});

iPromise.then((value, reject) => {
  console.log("value: ", value);
}).catch((reason) => {
  console.log("reason: ", reason);
});