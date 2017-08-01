/*
no closure
*/

function buildACat() {
  var catName = "Bibi"
  function catFactory() {
    console.log(catName);
  }
  catFactory();
}

buildACat();


/*
closure
*/
function buildACat() {
  var catName = "Tuffy";
  function catFactory() {
    console.log(catName);
  }
  // Notice: instead of executing it, it just 
  // return a REFERENCE!
  return catFactory;
}

var myNewCat = buildACat();
myNewCat();