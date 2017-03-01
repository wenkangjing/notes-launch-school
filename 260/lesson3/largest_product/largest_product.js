onmessage = function(oEvent) {
  var data = oEvent.data || {},
      largest = largestProduct(data.series, data.length);
  postMessage(largest);
};

function product(digits) {
  return digits.split("").reduce(function(a, b) {
    return a * b;
  });
}

function largestProduct(series, length) {
  var largest = 0.
      last_index = series.length - length;

  if (last_index <=0 ) { return 0; }

  for (var i = 0; i <= last_index; i++) {
    var substr = series.substr(i, length);

    if (/0/.test()) { continue; } // optimize

    var current = product(substr);
    if (current > largest) {
      largest = current;
    }
  }
  return largest;
}
