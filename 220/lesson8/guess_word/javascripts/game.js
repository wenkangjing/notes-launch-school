var randomWord = function() {
  var words = ['apple', 'banana', 'orange', 'pear'];
  return function() {
    var idx = Math.floor((Math.random() * words.length)),
        word = words[idx];
    words.splice(idx, 1);
    console.log(words);
    return word;
  };
}();

function Game() {
  this.word = randomWord();
  this.wrong_guesses = 0;
  this.total_wrong_guesses = 6;
  this.guessed_letters = [];
}

$(function(){
  var game;

  function updateMessage(message) {
    $("#message").text(message);
  }

  function initView(word) {
    var $word = $("#word"), 
        $guesses = $("#guesses");

    for (var i = 0; i < word.length; i++) {
      $word.append("<span></span>")
      $guesses.append("<span></span>")
    }
  }

  function newGame() {
    game = new Game();
    if (game.word === undefined) {
      updateMessage("Sorry, I've run out of words!");
    } else {
      initView(game.word);
    }
  }

  $("a").on("click", function(e) {
    e.preventDefault();
    newGame();
  });


  newGame();
});