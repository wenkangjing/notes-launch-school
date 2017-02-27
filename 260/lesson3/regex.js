var lyric = "123, easy as 123";
console.log(lyric.replace(/\d+/, "ABC"));
console.log(lyric.replace(/123/, "ABC"));

/*
Create a function that takes a string as an argument and returns a boolean indicating whether or not the string starts with an uppercase letter.
*/

function capitalized(str) {
  var matches = str.match(/^[A-Z]/);
  return !!matches || false;
}

console.log(capitalized("AAA"));
console.log(capitalized("aAA"));
console.log(capitalized("1AA"));
console.log(capitalized("A1A"));
console.log(capitalized("#aA"));
console.log(capitalized(""));

/*
Create a function that removes any space characters at the beginning and end of a string.
*/

function trim(str) {
  return str.replace(/^\s+|\s+$/g, "");
}
console.log(trim("  "));
console.log(trim("123"));
console.log(trim("  a cd e d  "));
console.log(trim("\tte\tst\t"));
console.log(trim("\nae\t"));
console.log(trim("      e    e  "));

/*
Using the string match method and the resulting array length, return the number of dollar sign characters ($) in the string "$ plus $$ equals $$$".
*/ 

(function(){
  function dollarCount(str) {
    var matches = str.match(/\$/g) || [];
    return matches.length;
  }

  console.log(dollarCount(""));
  console.log(dollarCount("$ plus $$"));
  console.log(dollarCount("$$ plus $$ equals $$$"));
  console.log(dollarCount("  $ plus $$ e\rquals $$$  "));
}());

/*
Create a function that will check each of these strings and return a boolean indicating there is at least one 5 to 7 letter word in it. For our purposes, a word's letter count does not include numeric digits.
*/
(function(){
  var passing_sentence = "The characters that specify repetition always follow the pattern to which they are being applied.";
  var failing_sentence = "I am the 1337est";

  function anyWord5to7(str) {
    var matches = str.match(/[a-z]{5,7}/gi) || [];
    return matches.length > 0;
  }
  function hasLongWord(str) {
    return /[A-Z]{5,7}/i.test(str); // better performance
  }
  console.log(anyWord5to7(failing_sentence));
  console.log(anyWord5to7(passing_sentence));
  console.log(anyWord5to7(""));
  console.log(anyWord5to7("abc abc abcdss"));
  console.log(anyWord5to7("123 123s456 abc "));
  console.log(anyWord5to7("aaaaa aaaaaaa"));
  console.log(anyWord5to7("abc1abc"));
}());

/*
Given these two variables, turn query into a global regular expression and use it to test the source. Be sure to set any applicable flags to ensure the query finds a match.
*/

(function() {
  var query = "Hen";
  var source = "She'll be coming 'round the mountain when she comes";
  var regex = new RegExp(query, 'i');
  console.log(regex.test(source));
  console.log(regex.test("abc HEN"));
  console.log(regex.test(""));
}());


/*
Given the string "H%*e(ll)o" create a regular expression to pass in to the string's match method that will return an array of only the letters from the string. Then join the letters together to form a word.
*/
(function(){
  var str = "H%*e(ll)o";
  var regex = new RegExp("[a-z]", "gi");
  var matches = str.match(regex) || [];
  console.log(matches.join(""));

  // or
  hello.match(/\w/g).join("");
}());


/*
Using a back reference, create a regular expression that will check whether or not a string has a pair of single or double quotes. The back reference will use the captured quote to ensure there is a matching end quote. As a refresher, here is an example of a back reference. We'll locate the word characters within backtick or single quote characters, but will not match if only one of either of the characters is present. The \1 back reference will take whatever value was captured in our parenthesized capture statement and use it in place of the \1, so if it found a backtick it will look for a closing backtick.
*/

(function() {
  var regexp = /([`'])\w+\1/;
  console.log(regexp.exec("`backticks`")); // ["`backticks`", "`"]
  console.log(regexp.exec("'quotes'")); // ["'quotes'", "'"]
  console.log(regexp.exec("`mismatched'")); // null

}());