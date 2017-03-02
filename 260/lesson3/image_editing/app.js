var workers = {
  brightness       : new Worker("workers/brightness.js"),
  saturation       : new Worker("workers/saturation.js"),
  invert           : new Worker("workers/invert.js"),
  horizontal_flip  : new Worker("workers/horizontal_flip.js"),
  vertical_flip    : new Worker("workers/vertical_flip.js"),
};

var app = {
  workers: {},
  last_data: {},
  prepareCanvas: function() {
    var image =  $("img").remove().get(0);
    this.canvas =  $("#canvas").get(0);
    this.ctx = this.canvas.getContext('2d');

    this.canvas.width = image.width;
    this.canvas.height = image.height;
    this.ctx.drawImage(image, 0, 0);

    this.last_data = getData(this.ctx);
  },
  handleError: function(e) { // running in worker thread
    console.error(e);
  },
  handleFinish: function(e) { // running in worker thread
    app.last_data = e.data;
    app.ctx.putImageData(e.data, 0, 0);
  },  
  processImage: function(e) {
    e.preventDefault();
    var $el = $(e.target),
        worker_name = $el.data("method"),
        rate = $el.val() || undefined;
    if (!!rate) {
      $el.next("span").text(rate);
    }
    workers[worker_name].postMessage({
      image_data: app.last_data,
      rate: rate
    });
  },
  buildEvents: function() {
    $("a.process").on("click", this.processImage);
    $("input.process").on("input", this.processImage);
    for (var prop in workers) {
      workers[prop].onmessage = this.handleFinish;
      workers[prop].onerror = this.handleError;
    }

  },
  close: function() {
    for (var prop in workers) {
      workers[prop].terminate();
    }
  },
  init: function() {
    this.prepareCanvas();
    this.buildEvents();
  }
}

function getData(ctx) {
  return ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
}

$(window).on("load", app.init.bind(app));
$(window).on("unload", app.close.bind(app));