var Words = function() {};

Words.prototype.count = function(str) {
  var result = {},
      word_list;

  word_list = str.trim().toLowerCase().split(/\s|,|\n/g);
  word_list.forEach(function(w) {
    // non alphabeta non number
    w = w.replace(" ", "").replace(/[^a-z0-9'-]*/g, "");
    
    // wrapped by single or double quotes
    if (/(['"])[^'"]+\1/.test(w)) {
      w = w.slice(1, w.length - 1);
    }
    if(w.length > 0) {
      if (typeof result[w] !== "number") {
        result[w] = 0;
      }
      result[w]++ ;
    }
  });
  return result;
};

function getUnicode(str) {
  var unicode_string = "";
  for (var i = 0; i < str.length; i++) {
    unicode_string += String(str.charCodeAt(0));
  }
  return unicode_string;
}
module.exports = Words;