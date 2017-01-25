$(function() {

  var canvas = $("canvas")[0],
      ctx = canvas.getContext("2d");
      
  var draw = {
    color: '#ffffff',
    shape: '',
    x: 0,
    y: 0,
    size:20,

    circle: function() {
      console.log(this.shape, this.x, this.y);
    },
    square: function() {
      console.log(this.shape, this.x, this.y);
      ctx.fillStyle = hexToRgb(this.color);
      ctx.fillRect(this.x, this.y, this.size, this.size);
    }, 
    triangle: function() {
      console.log(this.shape, this.x, this.y);
    }, 
    clear: function() {
      console.log(this.shape, this.x, this.y);
    }
  };

  function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return [r, g, b].join();
  }

  $("#canvas").on("click", function(e) {
    e.preventDefault();

    var $e = $(this);
    
    draw.x = e.offsetX;
    draw.y = e.offsetY;
    if(!draw.shape) {
      return;
    }
    draw[draw.shape]();
  });

  $("#operation > input[type=button]").on('click', function(e) {
    e.preventDefault();

    var $e = $(this);
    draw.shape = $e.data("method").toLowerCase();
  })

  $("#operation > input[type=text]").on('blur', function(e) {
    e.preventDefault();
    var $e = $(this);

    color = $e.val().toLowerCase();
  });

});