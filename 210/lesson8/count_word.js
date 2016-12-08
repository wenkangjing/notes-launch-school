// Scenario: Check the number of times that a word was used in a given text. Shape of the problem: Given a list of words select only the words that matches a criteria and return its count. This problem gets more complicated depending on how precise the selection will have to be. In the case of this scenario and given input, its a bit straight forward. The only concern would be the case wherein there are non-alphabetic characters appended to the words. To handle this case, an additional processing could be done to change the value of the words (transformation).


function countWord(word, text) {
  
  // remove non alphabetic. 
  // not a-z, i for case insensitve, so not a-z A-z
  // g for global search, means search throughout the string to match all occurences
  var textArray = text.replace(/[^a-z ]/ig, '').split(' ');

  var countArray = textArray.filter(function(item) {
    return item.toLowerCase() === word.toLowerCase();
  });

  return countArray.length;

}