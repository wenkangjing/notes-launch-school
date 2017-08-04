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

// event loop

console.log('1');
setTimeout(function cb() {
  console.log('4');
});
console.log('2');
setTimeout(function cb1() {
  console.log('5');
}, 0);
console.log('3');


// what is the output?
(function test() {
  setTimeout(function() {
    console.log(4)
  }, 0);

  new Promise(function executor(resolve) {
      console.log(1);
      for( var i=0 ; i<10000 ; i++ ) {
          i == 9999 && resolve();
      }
      console.log(2);
  }).then(function() {
      console.log(5);
  });
  console.log(3);
})();