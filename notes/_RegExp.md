Regular Expression
======================

**case sensitive by default**
**escape all non-alphanumeric characters even if they don't need to be escaped**

http://scriptular.com/

## patterns

- Alphanumerics
  - `/cat/`

- special characters
  - `$ ^ * + ? . ( ) [ ] { } | \` (metacharacters)
  - use \ to escape, /\?/ contains ?

- alternation `|`
  - `(a|b|c)` contains a or b or c
  - `a(1|2)d` contains a1d or a2d
  - parentheses isn't always required, but is strongly recommended. 

- ignore case `/i`
  - `/cat/i` contains cat, Cat, CAT, caT (case insensitive)

- set `[]`
  - matches a single occurrence of any of the characters between the brackets. 
  - `[12345]` contains any of char in []
  - `[abc][12]` contains any of a1 a2 b1 b2 c1 c2
  - e.g. wants a user to choose between 5 different things by entering a number between 1 and 5, you can validate that input with the regex `/[12345]/`. 
  - e.g. Likewise, you can validate a y/n prompt response with `/[nyNY]/`

- all
  - `(abc)` contains abc, same as /abc/
  - `(a|b)` a or b

- range `-`
  - `/[A-Za-z]/` all alphabets
  - `/[1-9]/` any number from 1 to 9

`[nN]` = `(n|N)`

`[0-9A-Ja-j]` = 



> While it is possible to construct ranges that cover non-alphanumeric characters, do not do this. Stick to the alphanumeric characters. Also, don't try to combine lowercase and uppercase alphabetic characters in a single range: /[A-z]/ does not do what you probably think it does. To see this, try /[A-z]/ with the following strings:


- Negation, must be inside `[]`
  - `/[^y]/` anything not y
  - `/[^aeiou]/` anything not aeiou
  - `/[^0-9]/` anything not number

- any `.`
  - `/./`
  - `/.../` any 3 thing

## Anchors

- start `^` or end `$` of line 
  - /^cat/
  - /cat$/

- start `\A` or end `\Z` of string
  - /\Acat/
  - /cat\z/

- word boundary
  - `/\b\w\w\w\b/` any 3-letter words
  - `^The\b` The as a *word* at the beginning of a line

>`\b` and `\B` do not work as word boundaries inside of character classes (between square brackets). In fact, \b means something else entirely when inside square brackets: it matches a backspace character.

## Shortcuts

- `/./` everything
- `\s` whitespace, tab, space, newline, return
- `\S` non \s
- `\d` digit [0-9]
- `\D` non \d
- `\h` hex [0-9a-fA-F] *ruby only*
- `\H` non \h *ruby only*
- `\w` words, contains alphabets, digit, _
- `\W` non \w

- `\b\w\w\w\b` 3 letters/digits word
- `\b[a-z][a-z][a-z]\b` 3 small case letter
- `\s...\s` 3 anything between whitespace

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


# Brief Summary

## Modifiers/Flags:

i	Perform case-insensitive matching
g	Perform a global match

## Brackets:

[abc]	Match a single character a, b, or c
[^abc]	Match any character except a, b, or c
[A-z]	Match any character from uppercase A to lowercase z
(ab|cd|ef)	Match either ab, cd, or ef
(...)	Capture anything enclosed

## Metacharacters

`^`	Start of line
`$`	End of line
`.`	Match any character
`\w`	Match a word chracter
`\W`	Match a non-word character
`\d`	Match a digit
`\D`	Match any non-digit character
`\s`	Match a whitespace character
`\S`	Match a non-whitespace character
`\b`	Match character at the beginning or end of a word
`\B`	Match a character not at beginning or end of a word
`\0`	Match a NUL character
`\t`	Match a tab character
`\xxx`	Match a character specified by octal number xxx
`\xdd`	Match a character specified by hexadecimal number dd
`\uxxxx`	Match a Unicode character specified by hexadecimal number xxxx

## Quantifiers

`n+`	Match at least one n
`n*`	Match zero or more n's
`n?`	Match zero or one n
`n{X}`	Match sequence of X n's
`n{X,Y}`	Match sequence of X to Y n's
`n{X,}`	Match sequence of X or more n's


# exercises

Test the pattern /\s...\s/ from the previous exercise against this text (be sure to delete the previous text first):

```
Doc in a big red box.
Hup! 2 3 4
```
Observe that only one of the 3 letter words in this text match the pattern, and it also matches "2 3". Why is it that this pattern doesn't include the 3 letter words Doc, red, box, or Hup, but it does match 2 3?

## Solution

Note that in all of these cases, the "match" is 5 characters long:

`Doc` is not included since Doc isn't preceded by any whitespace.
big is included since big is 3 characters that are both preceded and followed by whitespace

`red` is not included since the space character that precedes red was "consumed" when " big " was matched; that space is no longer available for matching once it has matched.

`box` is not included because box is followed by a period instead of whitespace.

`Hup` is not included because Hup is followed by an exclamation point.

`2 3` is included since 2 3 is 3 characters long and is both preceded and followed by whitespace.


