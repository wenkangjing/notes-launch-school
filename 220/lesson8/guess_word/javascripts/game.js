var randomWord = function() {
  var words = ['apple', 'banana', 'orange', 'pear'];
  return function() {
    var idx = Math.floor((Math.random() * words.length)),
        word = words[idx];
    words.splice(idx, 1);
    console.log(word);
    return word;
  };
}();

$(function(){
  var game,
      $apples      = $("#apples"),
      $message     = $("#message"),
      $new_game    = $("main a"),
      $letters     = $("#letters"),
      $guesses     = $("#guesses");

  function Game() {
    this.word = randomWord();
    this.wrong_guesses = 0;
    this.total_wrong_guesses = 6;
    this.guessed_letters = [];

    this.init();
  }

  // lost the constructor property, but we don't use type checking, it is ok
  Game.prototype = {
    updateGuesses: function() {
      $guesses.find('span').remove();
      if (this.word) {
        this.word.split("").forEach(function() {
          $guesses.append("<span></span>");
        });
      }
    },
    updateLetters: function() {
      $letters.find('span').remove();
      if (this.word) {
        this.word.split("").forEach(function() {
          $letters.append("<span></span>");
        });
      }
    },
    displayMessage: function(message) {
      $message.text(message);
    },
    toggleNewGame: function() {
      if (!this.word) {
        $new_game.hide();
      }
    },
    init: function() {
      if (!this.word) {
        this.displayMessage("Sorry, I've run out of words!");
      }
      this.updateLetters();
      this.updateGuesses();
      this.toggleNewGame();
    },
  };

  $new_game.on("click", function(e) {
    e.preventDefault();
    game = new Game();
  });

  game = new Game();
});