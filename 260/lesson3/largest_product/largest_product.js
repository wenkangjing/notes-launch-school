onmessage = function(oEvent) {
  var data = oEvent.data || {},
      largest = largestProduct(data.series, data.number);
  postMessage(largest);
};

function multiple(str) {
  return str.split("").reduce(function(a, b) {
    return a * b;
  });
}

function largestProduct(str, number) {
  var largest = 0;
  for (var i = 0; i <= str.length - number; i++) {
     var current = multiple(str.substr(i, number));
     if (current > largest) {
       largest = current;
     }
  }
  return largest;
}
