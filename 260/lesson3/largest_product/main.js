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
      number = parseInt($f.find("input").val().trim(), 10);
      if (!!series && number > 0) {
        var largest = largestProduct(series, number);
        process({
          series: series,
          number: number
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