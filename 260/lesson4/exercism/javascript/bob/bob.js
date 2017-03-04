var Bob = function() {};
/*


Bob is a lackadaisical teenager. In conversation, his responses are very limited.

Bob answers 'Sure.' if you ask him a question.

He answers 'Whoa, chill out!' if you yell at him.

He says 'Fine. Be that way!' if you address him without actually saying
anything.

He answers 'Whatever.' to anything else.

*/

Bob.prototype.hey = function(input) {
  var answer = "Whatever.";
  if(/[a-z]+/gi.test(input) && input === input.toUpperCase()) {
    answer = 'Whoa, chill out!';
  } else if(input.slice(-1) === "?") {
    answer = "Sure.";
  } else if (/^\s*$/.test(input)) {
    answer = "Fine. Be that way!";
  }
  return answer;
};

module.exports = Bob;
