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
// 12354
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

/*
output:
p1
global1
then1
timeout1
*/
setTimeout(function() {
    console.log('timeout1');
});
new Promise(function(resolve) {
    console.log('p1');
    resolve();
}).then(() => 
  console.log(' then1')
).then(() => 
  console.log(' then2')
);
console.log('global1');
new Promise(function(resolve) {
    console.log('pA');
    resolve();
}).then(() => 
  console.log(' thenA')
);
console.log('global2');