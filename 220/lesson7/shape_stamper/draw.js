$(function() {

  var canvas = $("canvas")[0],
      color = '#ffffff',
      ctx = canvas.getContext("2d"),
      shape = '',
      size = 20;
      
  var draw_methods = {
    circle: function(x, y) {
      ctx.fillStyle = color || '#ffffff';
      ctx.beginPath();
      ctx.arc(x, y, size / 2, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
    },
    square: function(x, y) {
      ctx.fillStyle = color || '#ffffff';
      ctx.fillRect(x, y, size, size);
    }, 
    triangle: function(x, y) {
      ctx.beginPath();
      ctx.fillStyle = color || '#ffffff';
      ctx.moveTo(x, y - size);
      ctx.lineTo(x + size, y);
      ctx.lineTo(x - size, y);
      ctx.lineTo(x, y - size);
      
      ctx.fill(); 
      ctx.closePath();
    }, 
    clear: function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  $("#canvas").on("click", function(e) {
    e.preventDefault();
    var $e = $(this);
    
    if(!shape) {
      return;
    }
    draw_methods[shape](e.offsetX, e.offsetY);
  });

  $("#operation > input[type=button]").on('click', function(e) {
    e.preventDefault();
    var $e = $(this);

    shape = $e.data("method").toLowerCase();
    if (shape === 'clear') {
      draw_methods.clear();
    }
  })

  $("#operation > input[type=text]").on('blur', function(e) {
    e.preventDefault();
    var $e = $(this);

    color = $e.val().toLowerCase();
  });

});