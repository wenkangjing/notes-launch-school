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

function isLetter(letter) {
  var code = letter.charCodeAt(0);
  return code >= 97 && code <= 122; // lower case
};

$(function() {
  var game,
      $body        = $(document.body),
      $apples      = $("#apples"),
      $message     = $("#message"),
      $new_game    = $("main a"),
      $letters     = $("#letters"),
      $guesses     = $("#guesses");

  var Game = {
    word: randomWord(),
    wrong_guesses: 0,
    total_wrong_guesses: 6,
    guessed_letters: [],
    updateBlanks: function() {
      $letters.find('span').remove();
      if (this.word) {
        this.word.split("").forEach(function() {
          $letters.append("<span></span>");
        });
      }
      $guesses.find("span").remove();
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
      $guesses.append("<span>" + letter + "</span>");
    },
    toggleNewGame: function(b) {
      if (b) {
        $new_game.show();
      } else {
        $new_game.hide();
      }
    },
    guess: function(e) {
      e.preventDefault();

      // run out of words
      if (!this.word) {
        return;
      }

      // already lose
      if (this.wrong_guesses >= this.total_wrong_guesses) {
        return;
      }

      var letter = e.key;
      if (!isLetter(letter)) {
        return;
      }

      // already guessed
      if (this.guessed_letters.indexOf(letter) !== -1) {
        console.log("already guessed");
        return;
      };

      this.updateGuesses(letter);
      
      // not hit
      if (this.word.indexOf(letter) === -1) {
        this.wrong_guesses++;
        console.log(this.wrong_guesses);
        this.updateApples();
        // lose?
        if (this.wrong_guesses >= this.total_wrong_guesses) {
          this.lose();
          return;
        };
        return;
      }

      // hit
      this.word.split("").forEach(function(ch, idx) {
        if (ch === letter) {
          this.updateLetters(letter, idx);
          // win?
          if ($letters.find("span:empty").length === 0) {
            this.win();
          }
        }
      }, this);
    },
    win: function() {
      console.log("win");
      this.updateMessage("You win.");
      this.toggleNewGame(true);
      this.setClass("win");
    },
    lose: function() {
      console.log("lose");
      this.updateMessage("You lose.");
      this.toggleNewGame(true);
      this.setClass("lose");
    },
    new: function(e) {
      e.preventDefault();

      this.word = randomWord();
      this.wrong_guesses = 0;
      this.total_wrong_guesses = 6;
      this.guessed_letters = [];
      
      if (!this.word) {
        this.updateMessage("Sorry, I've run out of words!");
      }
      this.updateApples();
      this.updateBlanks();
      this.toggleNewGame(!!this.word);
      $body.removeClass();
    },
    setClass: function(name) {
      $body.removeClass();
      $body.addClass(name);
    },
    unbind: function() {
      $body.off(".game");
    },
    bind: function() {
      $body.on("keypress.game", this.guess.bind(this));
      $new_game.on("click", this.new.bind(this));
    },
    init: function() {
      this.unbind();
      this.bind();
      if (!this.word) {
        this.updateMessage("Sorry, I've run out of words!");
      }
      this.updateBlanks();
      this.toggleNewGame(!!this.word);
      $body.removeClass();
      return this;
    }
  };

  var game = Object.create(Game).init();
});

