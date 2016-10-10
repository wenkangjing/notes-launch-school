101 Programming Foundations - Lesson 2 Small Programs
====================================================


# 1	Introduction


# 2	Ruby Style

1. tab = 2 
2. comment 	#
3. methold snake_case
4. constant FOUR = 4
5. prefer {} over do...end if one line
6. class CamelCase

[The Ruby Style Guide](https://github.com/bbatsov/ruby-style-guide)

# 3	Lecture: Kickoff

# 4	Set up a new directory for this lesson

# 5	A Note on Style

# 6	Walk-through: Calculator

- inspect() alias of to_s() 
- gets().chomp() to get rid of newline char
- to_i return 0 if invalid input, never raise exception
- local Variable inside if statement can access out side if (ruby scope)

# 7	Pseudo-Code

```
START	  start of the program
SET	    sets a variable we can use for later
GET	    retrieve input from user
PRINT	  displays output to user
READ	  retrieve value from variable
IF / ELSE IF / ELSE	show conditional branches in logic
WHILE	  show looping logic
END	    end of the program
```

1. a method that returns the sum of two integers

2. a method that takes an array of strings, and returns a string that is all those strings

3. concatenated together

4. a method that takes an array of integers, and returns a new array with every other element


# 8	Flowchart


# 9	Rubocop
- Rubocop: static analyzer
- linter


# 10	Walk-through: Refactoring Calculator
- %w(foo bar) is a shortcut for ["foo", "bar"]
- loop do...end

# 11	Rubocop Calculator


# 12	Debugging


# 13	Assignment: Calculator Bonus Features


# 14	Assignment: Mortgage / Car Loan Calculator


# 15	Coding Tips


# 16	Variable Scope


# 17	Pass by Reference vs Pass by Value


# 18	Walk-through: Rock Paper Scissors


# 19	Rubocop Rock Paper Scissors


# 20	Coding Tips 2


# 21	Assignment: RPS Bonus Features


# 22	Summary