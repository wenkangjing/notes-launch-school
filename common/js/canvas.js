function convertToGrayscale() {
  var ctx =  ctx =  document.querySelector("canvas").getContext("2d"),
      image_data = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height),
      gray;

  for (var i = 0, len = image_data.data.length; i < len; i += 4) {
    gray = image_data.data[i] * .3086 + image_data.data[i + 1] * .6094 + image_data.data[i + 2] * .0820;
    image_data.data[i] = gray;
    image_data.data[i + 1] = gray;
    image_data.data[i + 2] = gray;
  }
  
  ctx.putImageData(image_data, 0, 0);
}