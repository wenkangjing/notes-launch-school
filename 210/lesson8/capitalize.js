
function capitalize(text) {
  // split text into word array
  var textArray = text.split(' ');

  // loop to cpitalize
  var capitalizedArray = textArray.map(function(item) {
    return item[0].toUpperCase() + item.slice(1);
  });

  // join to a string
  return capitalizedArray.join(' ');
}

