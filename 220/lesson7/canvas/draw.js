$(function() {
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');
  var colors = ['#000', '#003', '#006', '#009', '#00c', '#00f'];

  function drawSquare() {
    colors.forEach(function(color, i) {
      ctx.fillStyle = color;
      ctx.fillRect(i * 20, i * 20, canvas.width - i * 40, canvas.height - i * 40);
    });
    colors.unshift(colors.pop());
  }
  //setInterval(drawSquare, 200);

  function drawCircle() {
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = x;

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }

  function drawTriangle() {
    var x = canvas.width / 2;
    var y = canvas.height / 2;        
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0, 102, 204, .7)';
    ctx.moveTo(x, y - 50);
    ctx.lineTo(x + 50, y);
    ctx.lineTo(x - 50, y);
    ctx.lineTo(x, y - 50);
    ctx.stroke();
    ctx.closePath();
  }

  function drawImage() {
    var img = document.querySelector('img');

    // We'll change the canvas width and height to match the image width and height
    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0);
  }

  function saveImage() {
    var img_src = canvas.toDataURL('png');
    var img = document.createElement('img');

    img.src = img_src;
    document.body.appendChild(img);      
  }

  function manipulateImage() {
    imageData = {
      width: 2,
      height: 2,
      data: [
        255, 0, 0, 255,
        255, 0, 0, 255,
        0, 0, 255, 255,
        0, 0, 255, 255
      ],
    }

    for (var i = 0; i < imageData.data.length; i += 4) {
      // red: imageData.data[i]
      // green: imageData.data[i + 1]
      // blue: imageData.data[i + 2]
      // alpha: imageData.data[i + 3]
    }    

    ctx.putImageData(imageData, 0, 0);    
  }

  manipulateImage();
});