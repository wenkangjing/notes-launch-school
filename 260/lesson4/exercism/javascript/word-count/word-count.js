var Words = function() {};

Words.prototype.count = function(str) {
  var result = {};
  str.trim().split(/\s|,/g).forEach(function(w) {
    w = w.replace(/[^a-z]/gi, "").trim();
    if (/[a-z]/gi.test(w) || /[0-9]/gi.test(w)) {
      if(result[w]) {
        result[w]++;
      } else {
        result[w] = 1;
      }
    }
  });
  return result;
};

module.exports = Words;