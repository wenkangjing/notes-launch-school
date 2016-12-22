# the odd words problem (explicit)

input
  - 1 - many words
  - separated by 
    - 1 - many spaces
    - followed by a point (terminating point)
    - chars: letters, space, point, <= 20 letters
    - *need to handle failures?*

output
  - words with odd words reversed (odd index) 
  - separated by single space
  - terminated: no space, followed by a dot

Example
  reverse_odd_words('hello.') // hello.
  reverse_odd_words('hello   .') // hello.
  reverse_odd_words('hello world.') // hello dlrow.
  reverse_odd_words('hello world  .') // hello dlrow.
  reverse_odd_words('hello    world  .') // hello dlrow.
  reverse_odd_words('hello    hello  world  .') // hello olleh world.
  reverse_odd_words('') // ''

Data Structure
- choices: string, array
- Array, because index is significant

Algorithm
- split string into array of strings with space or point
- map the array of string to a new array
  - map function: reverse the odd indexed strings
- join strings back to a string, delimeter is space
- append a point in the end

# diamond of stars (not so explicit)

Understanding the problem
- input
  - when happens when number is 0? *ask*
  - when happens when number is even number? *ask* 

- output
  - should I return \no
  - show I just print to screen

- model the problem
  - given an odd number n, e.g. 5
  - output n strings
    - 1, 3, 5, 3, 1
    - prepend number of spaces: 2, 1, 0, 1, 2
  - join together with \n or loop and print

Examples

```
  *
 ***
*****
 ***
  *  
```

Data Structure
  - input: odd number

Algorithm
- from a odd number 2a+1
  - generate array [1, 3, 5, .. 2a+1, ..., 5, 3, 1] -> x
  - generate array [a, a-1, .., 1, 0, 1, ..., a-1, a] -> y
- loop thru 2 arrays at the same time
  - for each iteration, print out y * ' ' + x + '*'

Futher Thinking: 

Hollow Diamonds?
```
  *
 * *
*   *
 * *
  *
```  


# century number (implicit)

Description: 

given an integaer year as input and returns the century. Return number, end with st, nd, rd, th. new centuires begin in years that end with 01. e.g. 1901-2000 -> the 20th century

model of problem
- input
  - integer number
  - need to validation? *ask*
- output
  - a string
  - begins with the century number
  - end with st, nd, rd, th *how*
- rules
  - new century begin with xx01
  - century number = floor of ((year -1 ) / 100) + 1 
  - century number to a string
    - 1: st
    - 2: nd
    - 3: rd
    - 4-20: th

    - 21: rd
    - 22: nd
    - 24-30: th
  - generalize:
    - year number % 10
    - reminder 1: st, 2: nd, 3: rd, 1 and 4-9: th
    - exception 11, 12, 13 

Examples:
  century(1);     => 1st
  century(100);     => 1st
  century(101);     => 2nd
  century(133);     => 2nd
  century(245);     => 3rd
  century(1000);     => 10th
  century(1052);     => 11th
  century(1152);     => 12th
  century(1252);     => 13th
  century(2012);     => 21st
  century(2112);     => 22nd
  century(22222);     => 223rd

Data Structure
- input: number
- output: century number + st, nd, rd, th

Algorithm
- century number: (year -1) / 100; // 1. code and test this first
- century string = century number to string + 'suffix rules' // 2. then suffix

Abstraction



# scrabble score (implicit)

Description:
Given a word, computes the scrabble score for that word. Given score on each letters

Model:
- input
  - a string

- output
  - the score is the sum of scores of each letter in the string

- Rules
  - lower case / upper case *ask - case insensitive in this case*
  - letter score table is used to lookup letter scores

Examples: test cases

  score('a')  => 1
  score('cabbage')  => 14
  score('Cabbage')  => 14 // ignore case

Data Structure
- input
  - array of chars
- rules
  - {'A': 1, 'B': d ...} 26 key-value pairs

Algorithm
- split input string to array  of chars
- map to lower case
- map each char into its scrabble score, referencing the lookup table
- redyce wutg synnubg up the values

# queen attach

...


# what is

Description: takes a word problem and returns the answer as an integer.

e.g. 

What is 5 plus 13?
- The programs should return 18.

What is 7 minus 5?
- The programs should return 2.

What is 33 divided by -3?
- The programs should return -11.

What is -3 multiplied by 25?
- The programs should return -75.


Understanding the problem
- input 
  - a sentence -> get operands, operator
  
- output
  - calc result 

Examples / Test cases

Data Structure
- input
  - string

- rules (hash table)
  - plus: +
  - minus: -
  - multiplied by: *
  - divided by: /

Algorithm




# substring

return all substrings








