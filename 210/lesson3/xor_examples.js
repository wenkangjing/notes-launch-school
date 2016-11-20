//
//Can you think of a situation where a boolean isXor function is useful? Suppose you were modeling a light at the top of a flight of stairs //wired such that you can turn the light on or off from either upstairs or downstairs. 
//

// one light
// 2 switches

var light = false;

function xor(value) {
  return !Boolean(value);
}

function switch1() {
  light = xor(light);
}

function switch2() {
  light = xor(light);
}

// test
console.log(light);
switch1();
console.log(light);
switch1();
console.log(light);

switch1();
console.log(light);
switch2();
console.log(light);

switch2();
console.log(light);

switch2();
console.log(light);