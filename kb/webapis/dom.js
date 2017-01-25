// callback is a Function be called for each node that is encountered
function walk(node, callback) {
  // do something with node
  callback(node);

  // for each child node
  for (var i = 0; i < node.childNodes.length; i++) {

    // recursively call walk()
    walk(node.childNodes[i], callback);
  }
}


// print out the nodeName of every node
walk(document.body, function(node) {
  console.log(node.nodeName);
});

// print out all p tags
walk(document.body, function(node) {
  if (node.nodeName === 'P') {
    console.log(node.textContent);
  }
});