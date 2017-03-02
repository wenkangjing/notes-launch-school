var workers  = {};
workers .brigntness = new Worker("workers/brigntness.js");
workers .saturation = new Worker("workers/saturation.js");
workers .invert = new Worker("workers/invert.js");
workers .horizontal_flip = new Worker("workers/horizontal_flip.js");
workers.vertical_flip = new Worker("workers/vertical_flip.js");

$(window).on("load", function(e) {
  //On window load, create variables for the canvas, image, and the context as DOM elements. Remove the image from the page.
  var $image = $("#image"),
      $canvas = $("#canvas"),
      ctx = $canvas.get(0).getContext('2d');

   $canvas.attr({
     width: $image.width(),
     height: $image.height()
   });
    ctx.drawImage($image.get(0), 0, 0);
   $image.remove();
});



workers.on("message", function(e) {
  console.log(e);
})