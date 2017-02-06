// -----------------------------------------------------------------------------
// function definition
function isLetter(ch) {
  var code = ch.toLowerCase().charCodeAt(0);
  return code >= 97 && code <= 122;
}

isLetter("a");
isLetter("6");

// -----------------------------------------------------------------------------
// IIFE - Immediately Invoked Function Expressions
(function(){
  console.log(1);
}());

// -----------------------------------------------------------------------------
// IIFE - to create block scope
(function() {
  var x = "Hello";
  function createPerson() {
    return {
      first_name: "Jamie",
      last_name: "Wen"
    };
  }
  console.log(x, createPerson());
}());


// -----------------------------------------------------------------------------
// IIFE - to create closure
var randomWord = (function(){
  var words = ['apple', 'banana', 'orange', 'pear'];
  return function() {
    var idx = Math.floor((Math.random() * words.length)),
        word = words[idx];
    words.splice(idx, 1);
    console.log(word);
    return word;
  };
}());

randomWord();
randomWord();
randomWord();
randomWord();


// -----------------------------------------------------------------------------
// nested functions - to better organization
function wakeUpAndCode() {
   function wakeUp() {
      console.log("I just woke up");
   }
 
   function code() {
      console.log("I am ready to code now");
   }
 
   wakeUp();
   code();
}
 
wakeUpAndCode();

// -----------------------------------------------------------------------------
// Constructor Function
//     caution: new keyword is a must

function Programmer(name, company, expertise) {
   this.name = name;
   this.company = company;
   this.expertise = expertise;
 
   this.writeCode = function() {
     console.log(this);
     console.log("write code var a = 1;");
   }
}

var javaProgrammer = new Programmer("jamke", "IRE", "10");
javaProgrammer.writeCode();