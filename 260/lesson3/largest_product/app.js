var worker = new Worker("largest_product.js");

worker.onmessage = function(e) {
  console.log(e.data);
  showResult(e.data);
}

worker.onerror = function(e) {
  console.error(e);
}

$("form").on("submit", function(e) {
  e.preventDefault();

  var $f = $(e.target),
      series = $f.find("textarea").val().replace(/\s/g, ""),
      length = parseInt($f.find("input").val().trim(), 10);
      if (!!series && number > 0) {
        var largest = largestProduct(series, length);
        process({
          series: series,
          length: number
        })
        showResult(largest);
      }
});

function process(data) {
  worker.postMessage(data);
}

function showResult(result) {
  $result = $("#result strong");
  $result.text(result);
}