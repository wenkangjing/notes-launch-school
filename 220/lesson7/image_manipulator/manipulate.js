var manipulator,
    ctx;

(function(){
  manipulator = {
    init: function() {
      $(document.body).append("<canvas></canvas>");
      ctx =  document.querySelector("canvas").getContext("2d");
    },
    drawImage: function(img) {
      ctx.canvas.width = img.naturalWidth;
      ctx.canvas.height = img.naturalHeight;
      ctx.drawImage(img, 0, 0);
    },
    convertToGrayscale: function() {
      var image_data = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height),
          gray;

      for (var i = 0, len = image_data.data.length; i < len; i += 4) {
        gray = image_data.data[i] * .3086 + image_data.data[i + 1] * .6094 + image_data.data[i + 2] * .0820;
        image_data.data[i] = gray;
        image_data.data[i + 1] = gray;
        image_data.data[i + 2] = gray;
      }
      ctx.putImageData(image_data, 0, 0);
    },
    writeImage: function() {
      var img = document.createElement("img");
      img.src = ctx.canvas.toDataURL();
      $("#manipulated").append(img);
    },
    uninit: function() {
      $("canvas").remove();
    }
  };
})();

$(window).load(function(e) {
  manipulator.init();

  $("img").each(function() {
    var img = $(this).get(0);
    manipulator.drawImage(img);
    manipulator.convertToGrayscale(); // content in ctx
    manipulator.writeImage(img);
  });

  manipulator.uninit();
});

