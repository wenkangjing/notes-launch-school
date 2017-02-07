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

//print out the nodeName of every node
walk(document.body, function(node) {
  console.log(node.nodeName);
});

/*

2. Write JavaScript to count how many paragraphs appear on the page.

var count = 0;
walk(document, function(node) {
  if (node.nodeName === "P") {
    count++;
  }
});

console.log(count);  

*/



/*

3. Write JavaScript to retrieve the first word from each of the paragraphs on the page.

let words = [];
walk(document, function(node) {
  if (node.nodeName === "P") {
   words.push(node.firstChild.data.trim().split(' ')[0]);
  }
});

console.log(words);  

*/

/*

4. Write JavaScript to add the class stanza to each paragraph except the first one

let first = true;
walk(document, function(node) {
  if (node.nodeName === "P") {
    if (first) {
      first = false;
    } else {
      node.className = 'stanza'; // node.classList.add("stanza");
    }
  }
});


*/


/*



*/