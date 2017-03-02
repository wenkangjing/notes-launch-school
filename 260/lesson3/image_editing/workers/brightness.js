onmessage = function(e) {
  var data = e.data.image_data.data,
      rate = e.data.rate,
      b = Math.floor(255 * +rate / 100);

  for (var i = 0, len = data.length; i < len; i += 4) {
    data[i] += b;
    data[i + 1] += b;
    data[i + 2] += b;
  }
  
  postMessage(e.data.image_data);
}