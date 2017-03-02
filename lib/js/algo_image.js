function invert(image_data) {
  var data = image_data.data;
  for (var i = 0; i < data.length; i += 4) {
    for (var j = 0; j < 3; j++) {
      data[i + j] = 255 - data[i + j];
    }
  }
}

function horizontalFlip(image_data) {
  var data = image_data.data,
      cols = image_data.width,
      rows = image_data.height,
      new_row,
      current_row;
  
  for (var y = 0; y < rows; y++) {
    new_row = [];
    current_row = y * cols * 4;
    for (var x = current_row; x < current_row + cols * 4; x += 4)  {
      new_row.push(data[x + 3]);
      new_row.push(data[x + 2]);
      new_row.push(data[x + 1]);
      new_row.push(data[x]);
    }
    new_row.reverse();

    for (let i = 0; i < new_row.length; i += 4) {
      data[current_row + i] = new_row[i];
      data[current_row + i + 1] = new_row[i + 1];
      data[current_row + i + 2] = new_row[i + 2];
      data[current_row + i + 3] = new_row[i + 3];
    }
  }
}

function verticalFlip(image_data) {
  var data = image_data.data,
      cols = image_data.width,
      rows = image_data.height,
      new_rows = [],
      current_col;
  
  for (var y = 0; y < rows; y++) {
    new_rows.push([]);
    current_col = y * cols * 4;
    for (var x = current_col; x < current_col + cols * 4; x++) {
      new_rows[y].push(data[x]);
    }
  }

  new_rows.reverse();

  new_rows.forEach(function(row, y) {
    row.forEach(function(i, x) {
      data[y * cols * 4 + x] = i;
    });
  });
}

