Regular Expression
======================

**case sensitive by default**
**escape all non-alphanumeric characters even if they don't need to be escaped**

## patterns

- Alphanumerics
  - /cat/

- special characters
  - $ ^ * + ? . ( ) [ ] { } | \
  - \ is escape, /\?/ contains ?


- alternation
  - (a|b|c) contains a or b or c
  - a(1|2)d contains a1d or a2d

- ignore case
  - /cat/i contains cat, Cat, CAT, caT (case insensitive)

- set
  - [12345] contains any of char in []
  - [abc][12] contains any of a1 a2 b1 b2 c1 c2

- all
  - (abc) contains abc, same as /abc/
  - (a|b) a or b

- range
  - /[A-Za-z]/ all alphabets
  - /[1-9]/ any number from 1 to 9

- Negation, inside []
  - /[^y]/ anything not y
  - /[^aeiou]/ anything not aeiou
  - /[^0-9]/ anything not number

- any
  - /./
  - /.../ any 3 thing


## Anchors

- start/end line
  - /^cat/
  - /cat$/

- start/end string
  - /\Acat/
  - /cat\z/

- word boundary
  - /\b\w\w\w\b/ any 3-letter words


## Shortcuts

- /./ everything
- \s whitespace, tab, space, newline, return
- \S non \s
- \d digit [0-9]
- \D non \d
- \h hex [0-9a-fA-F]
- \H non \h
- \w words, contains alphabets, digit, _
- \W non \w

- \b\w\w\w\b 3 letters/digits word
- \b[a-z][a-z][a-z]\b 3 small case letter
- \s...\s 3 anything between whitespace

## Quantifiers

- 0 or more *
  - \b\d\d\d\d*\b 3 or more than 3 digits as a word
  - /co*t/, mathces ct, cot, coot, cooot

- 1 or more + 

- 0 or 1 ? 

- range {}
  - /b\d{10}/b exactly 10 digits
  - /\b\d{3,}\b/ as least 3 digits
  - /\b[a-z]{5,8}\b/i all words between 5 to 8 letters


## greedy vs lazy
xabcbcbacy
- /a[abc]*c/ matches abcabcabc
- /a[abc]*?c/ matches abc it is a lazy match by specifying ?


## examples

- [abc] 	A single character of: a, b, or c
- [^abc] 	Any single character except: a, b, or c
- [a-z] 	Any single character in the range a-z
- [a-zA-Z] 	Any single character in the range a-z or A-Z
- ^ 	Start of line
- $ 	End of line
- \A 	Start of string
- \z 	End of string
- . 	Any single character
- \s 	Any whitespace character
- \S 	Any non-whitespace character
- \d 	Any digit
- \D 	Any non-digit
- \w 	Any word character (letter, number, underscore)
- \W 	Any non-word character
- \b 	Any word boundary
- (...) 	Capture everything enclosed
- (a|b) 	a or b
- a? 	Zero or one of a
- a* 	Zero or more of a
- a+ 	One or more of a
- a{3} 	Exactly 3 of a
- a{3,} 	3 or more of a
- a{3,6} 	Between 3 and 6 of a
- /[^a-z]/i non letter
- /[^0-9]/ non digit
- [0-9A-Za-z] letter and digit



space (' '), 
tab ('\t'), 
vertical tab ('\v'), 
carriage return ('\r'), 
line feed ('\n'), 


options
- i case insensitive 
- m make dot match newlines 
- x ignore whitespace in regex 
- o perform #{...} substitutions only once 