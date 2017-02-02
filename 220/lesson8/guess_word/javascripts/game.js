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
      $body        = $(document.body),
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
    updateBlanks: function() {
      $letters.find('span').remove();
      $guesses.find('span').remove();
      if (this.word) {
        this.word.split("").forEach(function() {
          $letters.append("<span></span>");
          $guesses.append("<span></span>");
        });
      }
    },
    updateApples: function() {
      $apples.removeClass();
      $apples.addClass("guess_" + this.wrong_guesses);
    },
    updateMessage: function(message) {
      $message.text(message);
    },
    updateLetters: function(letter, idx) {
      console.log("hit", letter, idx);
      $letters.find("span").eq(idx).text(letter);
    },
    updateGuesses: function(letter) {
      this.guessed_letters.push(letter);
      $guesses.find("span:empty").eq(0).text(letter);
    },
    toggleNewGame: function(b) {
      if (b) {
        $new_game.show();
      } else {
        $new_game.hide();
      }
    },
    guess: function(letter) {
      // lose?
      if (this.guessed_letters.length >= this.total_wrong_guesses) {
        this.lose();
        return;
      };

      // already guessed
      if (this.guessed_letters.indexOf(letter) !== -1) {
        console.log("already guessed");
        return;
      };
      this.updateGuesses(letter);
      
      // not hit
      if (this.word.indexOf(letter) === -1) {
        this.wrong_guesses++;
        this.updateApples();
        return;
      }

      // hit
      this.word.split("").forEach(function(ch, idx) {
        if (ch === letter) {
          this.updateLetters(letter, idx);
        }
      }, this);

      // win?
      if ($letters.find("span:empty").length === 0) {
        this.win();
      }
    },
    win: function() {
      console.log("win");
      this.updateMessage("You win.");
      this.toggleNewGame(true);      
      if (!$body.hasClass("win")) {
        $body.addClass("win");
      }
    },
    lose: function() {
      console.log("lose");
      this.updateMessage("You lose.");
      this.toggleNewGame(true);
      if (!$body.hasClass("lose")) {
        $body.addClass("lose");
      }
    },
    init: function() {
      if (!this.word) {
        this.updateMessage("Sorry, I've run out of words!");
      }
      this.updateBlanks();
      this.toggleNewGame(!!this.word);
      $body.removeClass();
    }
  };

  $new_game.on("click", function(e) {
    e.preventDefault();
    game = new Game();
  });

  $(document).on("keypress", function(e) {
    e.preventDefault();

    if (e.which >= 97 && e.which <=122 && game.word) {
      game.guess(e.key);
    }
  });

  game = new Game();
});